import {Router} from 'express'
import {
    getAll,
    getID,
    insertCategory,
    updateCategory
} from '../controllers/categorias.controller.js'

const categoriasRouter = Router()

categoriasRouter.get('/', getAll)
categoriasRouter.get('/:id', getID)
categoriasRouter.post('/', insertCategory)
categoriasRouter.put('/:id', updateCategory)

export default categoriasRouter