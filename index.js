import express from 'express'
import productosRoutes from './routes/productos.router.js'

const app = express()

const PORT = process.env.PORT || 3000
app.use(express.json())

app.use('/categorias', productosRoutes)

app.use((req, res) => {
    res.status(404).json(
        {
            message: `${req.url} no encontrada`
        }
    )
})
app.listen(PORT, () => console.log('Listening on port ' + PORT))
