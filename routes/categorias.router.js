import {Router} from 'express'
import {
    getAll,
    getID,
    insertCategory
} from '../controllers/categorias.controller.js'

const categoriasRouter = Router()

categoriasRouter.get('/', getAll)
categoriasRouter.get('/:id', getID)
categoriasRouter.post('/', insertCategory)

export default categoriasRouter