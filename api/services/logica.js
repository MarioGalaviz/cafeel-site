require('dotenv').config()
const { pool } = require('../config');

const infoCafeteria = (req, res) => {
    pool.query('SELECT * FROM cafeterias WHERE usuario = $1', [req.body.nombre], (error, results) => {
        if (error) {
            throw error
        }
        res.status(200).json(results.rows)
    })
}

const getProducts = (req, res) => {


    let filtro

    if (req.body.todos) {
        filtro = ''
    } else {
        filtro = 'AND productos.activo IS true'
    }

    pool.query('SELECT productos.id_producto, productos.producto, productos.nombre_corto \
    AS prod_corto, categorias.id_categoria, productos.costo, categorias.categoria, \
    categorias.nombre_corto as cat_corto, cuenta.cuenta, productos.activo,\
    productos.tamano, productos.addons \
    FROM productos \
    LEFT JOIN categorias ON productos.id_categoria = categorias.id_categoria \
    LEFT JOIN (SELECT id_producto, count(id_producto) AS cuenta FROM elementos WHERE id_cafeteria = $1 GROUP BY id_producto) cuenta on cuenta.id_producto = productos.id_producto \
    WHERE productos.id_cafeteria = $1 AND productos.borrado IS NOT TRUE ' + filtro + ' \
    ORDER BY cuenta.cuenta DESC', [req.body.id], (error, results) => {
        if (error) {
            throw error
        }
        const productos = results.rows

        pool.query('SELECT  categorias.id_categoria, categorias.categoria, \
        categorias.nombre_corto as cat_corto, SUM(cuenta.cuenta) AS cuenta \
        FROM productos \
        LEFT JOIN categorias ON productos.id_categoria = categorias.id_categoria \
        LEFT JOIN (SELECT id_producto, count(id_producto) AS cuenta FROM elementos WHERE id_cafeteria = $1 GROUP BY id_producto) cuenta on cuenta.id_producto = productos.id_producto \
        WHERE productos.id_cafeteria = $1 AND categorias.borrado IS NOT TRUE AND productos.borrado IS NOT TRUE ' + filtro + ' \
        GROUP BY categorias.id_categoria\
        ORDER BY cuenta DESC', [req.body.id], (error, results) => {
            if (error) {
                throw error
            }

            const categorias = results.rows

            pool.query('SELECT * FROM tamanos WHERE id_cafeteria = $1 AND borrado IS NOT TRUE',
            [req.body.id], (error, results) => {
                if (error) {
                    throw error
                }
                res.status(200).json({productos, categorias, tamanos: results.rows})
            })

            
        })

        
    })
}

module.exports = {
    infoCafeteria,
    getProducts
}