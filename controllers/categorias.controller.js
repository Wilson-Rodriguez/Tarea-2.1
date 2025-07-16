import {obtenerCategoriasDB, obtenerCategoriasIDDB} from '../model/categorias.modelo.js'


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