import {Router} from 'express'
import {
    getAll,
} from '../controllers/categorias.controller.js'

const categoriasRouter = Router()

categoriasRouter.get('/', getAll)

export default categoriasRouter