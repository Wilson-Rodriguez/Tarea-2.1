import {Router} from 'express'
import {
    getAll,
    getID
} from '../controllers/categorias.controller.js'

const categoriasRouter = Router()

categoriasRouter.get('/', getAll)
categoriasRouter.get('/:id', getID)

export default categoriasRouter