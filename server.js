import express from 'express'
import dotenv from 'dotenv'
import { carsRouter } from './routes/carsRouter.js'

dotenv.config()
const PORT = process.env.PORT_SESSION_KEY
const app = express()

app.use(express.static('public'))

app.use('/', (req, res)=>{
    console.log('User gets into server')
    res.json('welcome to vintage cars API')
})

app.listen(PORT, ()=>{
    console.log(`Server Listens to: ${PORT}`)
})
