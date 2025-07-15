import pool from '../config/db.js'

export const obtenerCategoriasDB = async () => {
    const query = 'select * from categorias'
    const [results] = await pool.query(query)
    return results
}