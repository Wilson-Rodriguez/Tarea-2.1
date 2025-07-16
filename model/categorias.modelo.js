import pool from '../config/db.js'

export const obtenerCategoriasDB = async () => {
    const query = 'select * from categorias'
    const [results] = await pool.query(query)
    return results
}

export const obtenerCategoriasIDDB = async (id) => {
    const query = 'select * from categorias where id = ?'
    const [results] = await pool.query(query, [id])
    return results
}