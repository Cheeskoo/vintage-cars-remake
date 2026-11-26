import express from 'express'
import { cars } from '../data/cars.js'
import { requireAuth } from '../lib/auth.js'
import { setFavorite } from '../lib/store.js'

export const favoritesRouter = express.Router()

favoritesRouter.use(requireAuth)

const withoutGallery = ({ imagenes, ...car }) => car

favoritesRouter.get('/', (req, res) => {
    const favoritos = req.user.favoritos
        .map(id => cars.find(car => car.id === id))
        .filter(Boolean)
        .map(withoutGallery)
    res.json(favoritos)
})

function findCar(req, res) {
    const car = cars.find(c => c.id === Number(req.params.carId))
    if (!car) res.status(404).json({ error: 'Auto no encontrado.' })
    return car
}

favoritesRouter.post('/:carId', async (req, res) => {
    const car = findCar(req, res)
    if (!car) return
    const ids = await setFavorite(req.user.id, car.id, true)
    res.status(201).json({ ids })
})

favoritesRouter.delete('/:carId', async (req, res) => {
    const car = findCar(req, res)
    if (!car) return
    const ids = await setFavorite(req.user.id, car.id, false)
    res.json({ ids })
})
