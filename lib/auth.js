import crypto from 'node:crypto'
import { findUserById } from './store.js'

export const COOKIE_NAME = 'vc_session'
const SESSION_DAYS = 7

let secret = process.env.SESSION_SECRET || process.env.SPIRAL_SESSION_KEY
if (!secret) {
    secret = crypto.randomBytes(32).toString('hex')
    console.warn('[auth] SESSION_SECRET no esta definido en .env: se usa uno temporal (las sesiones se pierden al reiniciar).')
}

export function hashPassword(password) {
    const salt = crypto.randomBytes(16).toString('hex')
    const hash = crypto.scryptSync(password, salt, 64).toString('hex')
    return `${salt}:${hash}`
}

export function verifyPassword(password, stored) {
    const [salt, hash] = stored.split(':')
    const candidate = crypto.scryptSync(password, salt, 64)
    const expected = Buffer.from(hash, 'hex')
    return candidate.length === expected.length && crypto.timingSafeEqual(candidate, expected)
}

function sign(payload) {
    return crypto.createHmac('sha256', secret).update(payload).digest('base64url')
}

export function createToken(userId) {
    const payload = Buffer.from(JSON.stringify({
        uid: userId,
        exp: Date.now() + SESSION_DAYS * 24 * 60 * 60 * 1000
    })).toString('base64url')
    return `${payload}.${sign(payload)}`
}

function readToken(token) {
    if (!token || !token.includes('.')) return null
    const [payload, signature] = token.split('.')
    const expected = sign(payload)
    if (signature.length !== expected.length ||
        !crypto.timingSafeEqual(Buffer.from(signature), Buffer.from(expected))) return null
    try {
        const data = JSON.parse(Buffer.from(payload, 'base64url').toString())
        return data.exp > Date.now() ? data : null
    } catch {
        return null
    }
}

function parseCookies(header = '') {
    return Object.fromEntries(header.split(';')
        .map(part => part.trim().split('='))
        .filter(([key, value]) => key && value)
        .map(([key, ...rest]) => [key, decodeURIComponent(rest.join('='))]))
}

export function setSessionCookie(res, userId) {
    res.cookie(COOKIE_NAME, createToken(userId), {
        httpOnly: true,
        sameSite: 'lax',
        secure: process.env.NODE_ENV === 'production',
        maxAge: SESSION_DAYS * 24 * 60 * 60 * 1000
    })
}

export function clearSessionCookie(res) {
    res.clearCookie(COOKIE_NAME, { httpOnly: true, sameSite: 'lax' })
}

export async function attachUser(req, res, next) {
    const token = parseCookies(req.headers.cookie)[COOKIE_NAME]
    const data = readToken(token)
    req.user = data ? await findUserById(data.uid) : null
    next()
}

export function requireAuth(req, res, next) {
    if (!req.user) {
        return res.status(401).json({ error: 'Tenes que iniciar sesion.' })
    }
    next()
}

export function publicUser(user) {
    const { passwordHash, ...rest } = user
    return rest
}
