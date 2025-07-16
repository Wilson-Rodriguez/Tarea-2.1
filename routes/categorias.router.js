import {Router} from 'express'
import {
    getAll,
    getID,
    insertCategory,
    updateCategory,
    deleteCategory
} from '../controllers/categorias.controller.js'

const categoriasRouter = Router()

categoriasRouter.get('/', getAll)
categoriasRouter.get('/:id', getID)
categoriasRouter.post('/', insertCategory)
categoriasRouter.put('/:id', updateCategory)
categoriasRouter.delete('/:id', deleteCategory)

export default categoriasRouter