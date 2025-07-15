import {Router} from 'express'
import {
    getAll,
    productoPorID,
    agregarProducto

} from '../controllers/productos.controller.js'

const productosRouter = Router()

productosRouter.get('/', (req, res) => {
    getAll(req, res)
})

productosRouter.get('/:id', productoPorID)
productosRouter.post('/', agregarProducto)

export default productosRouter