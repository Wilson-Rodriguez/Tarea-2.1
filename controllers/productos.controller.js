import productos from '../local_db/productos.json' with {type: 'json'}


export const getAll = (req, res) => {
    res.json(productos)
}
