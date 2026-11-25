import express from 'express'
import { cars } from '../data/cars.js'

export const carsRouter = express.Router()

const normalize = text => String(text ?? '')
    .normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase().trim()

// GET /api/cars/filtros -> opciones para los selects del catalogo
carsRouter.get('/filtros', (req, res) => {
    const unique = key => [...new Set(cars.map(car => car[key]))].sort((a, b) => a.localeCompare(b, 'es'))
    res.json({ categorias: unique('categoria'), marcas: unique('marca') })
})

// GET /api/cars?buscar=&categoria=&marca=&disponible=true|false&orden=ASC|DESC
carsRouter.get('/', (req, res) => {
    const { buscar, categoria, marca, disponible, orden } = req.query
    let result = [...cars]

    if (buscar) {
        const term = normalize(buscar)
        result = result.filter(car =>
            [car.nombre, car.marca, car.categoria, car.descripcion, car.anio].some(v => normalize(v).includes(term)))
    }
    if (categoria && categoria !== 'default') result = result.filter(car => car.categoria === categoria)
    if (marca && marca !== 'default') result = result.filter(car => car.marca === marca)
    if (disponible === 'true' || disponible === 'false') {
        result = result.filter(car => car.disponible === (disponible === 'true'))
    }
    if (orden === 'ASC') result.sort((a, b) => a.precio - b.precio)
    if (orden === 'DESC') result.sort((a, b) => b.precio - a.precio)

    res.json(result.map(({ imagenes, ...car }) => car))
})

// GET /api/cars/:id -> detalle completo con galeria
carsRouter.get('/:id', (req, res) => {
    const car = cars.find(c => c.id === Number(req.params.id))
    if (!car) return res.status(404).json({ error: 'Auto no encontrado.' })
    res.json(car)
})
