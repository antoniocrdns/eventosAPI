const express = require('express')
const routes = express.Router()

// --------- Consumir datos ------------
routes.get('/', async (req, res) => {
    try {
        req.getConnection((err, conn) => {
            if (err) return res.send(err)
            conn.query('select * from eventos', (err, rows) => {
                if (err) return res.send(err)

                res.json(rows)
            })
        })
    } catch (error) {
        res.status(500);
    }
})

// --------- Consumir dato ------------
routes.get('/:id', async (req, res) => {
    try {
        req.getConnection((err, conn) => {
            if (err) return res.send(err)
            conn.query('select * from eventos where id = ?', [req.params.id], (err, rows) => {
                if (err) return res.send(err)

                res.json(rows)
            })
        })
    } catch (error) {
        res.status(500);
    }
})

// --------- Insertar datos --------------
routes.post('/', async (req, res) => {
    try {
        req.getConnection((err, conn) => {
            if (err) return res.send(err)
            conn.query('insert into eventos set ?', [req.body], (err, rows) => {
                if (err) return res.send(err)

                res.send('evento añadido.')
            })
        })
    } catch (error) {
        res.status(500);
    }
})

// --------- Eliminar datos -------------
routes.delete('/:id', async (req, res) => {
    try {
        req.getConnection((err, conn) => {
            if (err) return res.send(err)
            conn.query('delete from eventos where id = ?', [req.params.id], (err, rows) => {
                if (err) return res.send(err)

                res.send('evento eliminado.')
            })
        })
    } catch (error) {
        res.status(500);
    }
})

// --------- Actualizar datos -------------
routes.put('/:id', async (req, res) => {
    try {
        req.getConnection((err, conn) => {
            if (err) return res.send(err)
            conn.query('update eventos set ? where id = ?', [req.body, req.params.id], (err, rows) => {
                if (err) return res.send(err)

                res.send('evento actualizado.')
            })
        })
    } catch (error) {
        res.status(500);
    }
})


module.exports = routes