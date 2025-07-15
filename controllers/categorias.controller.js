import {obtenerCategoriasDB} from '../model/categorias.modelo.js'


export const getAll = async (req, res) => {
    const categoriasDB = await obtenerCategoriasDB()
    console.log(categoriasDB)
}
