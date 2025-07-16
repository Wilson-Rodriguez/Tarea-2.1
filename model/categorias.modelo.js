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

export const insertarCategoriasDB = async (categoria) => {
    const query = 'insert into categorias(nombre) values (?)'
    const results = await pool.query(query, [categoria])
    return results
}

export const actualizarCategoriasDB = async (id, categoriaNueva) => {
    const query = 'update categorias set nombre = ? where id = ?';
    const results = await pool.query(query, [categoriaNueva, id])
    return results
}