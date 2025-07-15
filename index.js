import express from 'express'
import categoriasRouter from './routes/categorias.router.js'

const app = express()

const PORT = process.env.PORT || 3000
app.use(express.json())

app.use('/categorias', categoriasRouter)

app.use((req, res) => {
    res.status(404).json(
        {
            message: `${req.url} no encontrada`
        }
    )
})
app.listen(PORT, () => console.log('Listening on port ' + PORT))
