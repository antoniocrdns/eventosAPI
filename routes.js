const express = require('express')
const routes = express.Router()

// --------- Consumir datos ------------
routes.get('/', (req, res) => {
    req.getConnection((err, conn) => {
        if (err) return res.send(err)

        conn.query('select * from eventos', (err, rows) => {
            if (err) return res.send(err)

            res.json(rows)
        })
    })
})

// --------- Insertar datos --------------
routes.post('/', (req, res) => {
    req.getConnection((err, conn) => {
        if (err) return res.send(err)
        conn.query('insert into eventos set ?', [req.body], (err, rows) => {
            if (err) return res.send(err)

            res.send('evento añadido.')
        })
    })
})

// --------- Eliminar datos -------------
routes.delete('/:id', (req, res) => {
    req.getConnection((err, conn) => {
        if (err) return res.send(err)
        conn.query('delete from eventos where id = ?', [req.params.id], (err, rows) => {
            if (err) return res.send(err)

            res.send('evento eliminado.')
        })
    })
})

// --------- Actualizar datos -------------
routes.put('/:id', (req, res) => {
    req.getConnection((err, conn) => {
        if (err) return res.send(err)
        conn.query('update eventos set ? where id = ?', [req.body, req.params.id], (err, rows) => {
            if (err) return res.send(err)

            res.send('evento actualizado.')
        })
    })
})


module.exports = routes