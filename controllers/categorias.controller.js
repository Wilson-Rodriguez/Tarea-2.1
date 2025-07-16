import {obtenerCategoriasDB, obtenerCategoriasIDDB, insertarCategoriasDB} from '../model/categorias.modelo.js'


export const getAll = async (req, res) => {
    const categoriasDB = await obtenerCategoriasDB()
    console.log(categoriasDB)
}

export const getID = async (req, res) => {
    const {id} = req.params
    const parsedID = Number(id)
    const categoriasID = await obtenerCategoriasIDDB(parsedID)
    console.log(categoriasID)
}

export const insertCategory = async (req, res) => {
    const {nombre} = req.body
    const insertar = await insertarCategoriasDB(nombre)
}