// -------- Modulos requeridos -------
const express = require('express')
const mysql = require('mysql')
const myconn = require('express-myconnection')
const routes = require('./routes')

const app = express()
app.set('port', process.env.PORT || 9000)
const dbSettings = {
    host: 'localhost',
    port: '3306',
    user: 'id21951592_anton',
    password: 'Mikasa-0421',
    database: 'id21951592_bd_paginaeventos',
}

// Midleware
app.use(myconn(mysql, dbSettings, 'single'))
app.use(express.json())
// --------------- Server routes ---------------
app.get('/', (req, res)=>{
    res.send('Welcome to my API')
})

app.use('/api', routes)

// --------------- Server running ---------------
app.listen(app.get('port'), ()=>{
    console.log('Server running on port', app.get('port'))
});