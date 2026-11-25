import 'dotenv/config'
import express from 'express'
import { carsRouter } from './routes/carsRouter.js'
import { authRouter } from './routes/authRouter.js'
import { favoritesRouter } from './routes/favoritesRouter.js'
import { attachUser } from './lib/auth.js'

// PORT es el nombre estandar; PORT_SESSION_KEY se mantiene por compatibilidad con el .env anterior.
const PORT = process.env.PORT || process.env.PORT_SESSION_KEY || 3000
const app = express()

app.disable('x-powered-by')
app.use(express.json({ limit: '10kb' }))
app.use(express.static('public'))
app.use(attachUser)

app.use('/api/cars', carsRouter)
app.use('/api/auth', authRouter)
app.use('/api/favorites', favoritesRouter)

app.use('/api', (req, res) => {
    res.status(404).json({ error: 'Ruta de la API no encontrada.' })
})

app.use((req, res) => {
    res.status(404).sendFile('html/404.html', { root: 'public' })
})

app.use((err, req, res, next) => {
    console.error(err)
    const status = err.status || err.statusCode || 500
    res.status(status).json({ error: status === 500 ? 'Error interno del servidor.' : err.message })
})

app.listen(PORT, () => {
    console.log(`Vintage Cars corriendo en http://localhost:${PORT}`)
})
