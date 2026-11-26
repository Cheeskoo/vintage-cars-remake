import express from 'express'
import { createUser, findUserByLogin } from '../lib/store.js'
import { hashPassword, verifyPassword, setSessionCookie, clearSessionCookie, publicUser } from '../lib/auth.js'

export const authRouter = express.Router()

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const USER_RE = /^[a-zA-Z0-9_.-]{3,30}$/

authRouter.post('/register', async (req, res) => {
    const nombre = String(req.body?.nombre ?? '').trim()
    const apellido = String(req.body?.apellido ?? '').trim()
    const correo = String(req.body?.correo ?? '').trim().toLowerCase()
    const usuario = String(req.body?.usuario ?? '').trim()
    const password = String(req.body?.password ?? '')

    if (!nombre || !apellido || !correo || !usuario || !password) {
        return res.status(400).json({ error: 'Completa todos los campos.' })
    }
    if (!EMAIL_RE.test(correo)) return res.status(400).json({ error: 'El correo no es valido.' })
    if (!USER_RE.test(usuario)) {
        return res.status(400).json({ error: 'El usuario debe tener entre 3 y 30 caracteres (letras, numeros, . _ -).' })
    }
    if (password.length < 6) return res.status(400).json({ error: 'La contraseña debe tener al menos 6 caracteres.' })
    if (await findUserByLogin(usuario) || await findUserByLogin(correo)) {
        return res.status(409).json({ error: 'Ese usuario o correo ya esta registrado.' })
    }

    const user = await createUser({ nombre, apellido, correo, usuario, passwordHash: hashPassword(password) })
    setSessionCookie(res, user.id)
    res.status(201).json({ user: publicUser(user) })
})

authRouter.post('/login', async (req, res) => {
    const login = String(req.body?.usuario ?? '')
    const password = String(req.body?.password ?? '')
    const user = login && password ? await findUserByLogin(login) : null

    if (!user || !verifyPassword(password, user.passwordHash)) {
        return res.status(401).json({ error: 'Usuario o contraseña incorrectos.' })
    }
    setSessionCookie(res, user.id)
    res.json({ user: publicUser(user) })
})

authRouter.post('/logout', (req, res) => {
    clearSessionCookie(res)
    res.json({ ok: true })
})

authRouter.get('/me', (req, res) => {
    res.json({ user: req.user ? publicUser(req.user) : null })
})
