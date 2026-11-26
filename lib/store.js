import fs from 'node:fs/promises'
import path from 'node:path'
import crypto from 'node:crypto'

const DB_FILE = process.env.USERS_DB_FILE || path.resolve('data', 'users.json')

let cache = null
let writing = Promise.resolve()

async function load() {
    if (cache) return cache
    try {
        cache = JSON.parse(await fs.readFile(DB_FILE, 'utf8'))
    } catch (err) {
        if (err.code !== 'ENOENT') throw err
        cache = { users: [] }
    }
    return cache
}

function save() {
    writing = writing.then(async () => {
        await fs.mkdir(path.dirname(DB_FILE), { recursive: true })
        const tmp = `${DB_FILE}.tmp`
        await fs.writeFile(tmp, JSON.stringify(cache, null, 2))
        await fs.rename(tmp, DB_FILE)
    })
    return writing
}

export async function findUserById(id) {
    const db = await load()
    return db.users.find(u => u.id === id) ?? null
}

export async function findUserByLogin(login) {
    const db = await load()
    const value = login.trim().toLowerCase()
    return db.users.find(u => u.usuario.toLowerCase() === value || u.correo.toLowerCase() === value) ?? null
}

export async function createUser({ nombre, apellido, correo, usuario, passwordHash }) {
    const db = await load()
    const user = {
        id: crypto.randomUUID(),
        nombre,
        apellido,
        correo,
        usuario,
        passwordHash,
        favoritos: [],
        creado: new Date().toISOString()
    }
    db.users.push(user)
    await save()
    return user
}

export async function setFavorite(userId, carId, isFavorite) {
    const user = await findUserById(userId)
    if (!user) return null
    const set = new Set(user.favoritos)
    isFavorite ? set.add(carId) : set.delete(carId)
    user.favoritos = [...set]
    await save()
    return user.favoritos
}
