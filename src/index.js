import express from 'express'
import usuariosRouter from '../routes/usuariosRoutes.js'

const app = express()

app.use(express.json())

app.use('/api', usuariosRouter)
app.use('*', (req, res) => res.end('USE: No se encontró la ruta'))

app.listen(3000, () => console.log('Servidor levantado en http:/localhost:3000'))
