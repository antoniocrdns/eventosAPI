// -------- Modulos requeridos ----------
const express = require('express')
const mysql = require('mysql')
const myconn = require('express-myconnection')
const routes = require('./routes')
const cors = require('cors')

// --------- Conexion a DB -----------
const app = express()
// Habilitar cors
app.use(cors());

app.set('port', process.env.PORT || 9000)
const dbSettings = {
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: '',
    database: 'paginaeventos',
    ssl: {
        rejectUnauthorized: false
    }
}

// Midleware
app.use(myconn(mysql, dbSettings, 'single'))
app.use(express.json())
// ------------ Server routes ------------
app.get('/', (req, res)=>{
    res.send('Welcome to my API')
})

app.use('/api', routes)

// ------------ Server running ------------
app.listen(app.get('port'), ()=>{
    console.log('Server running on port', app.get('port'))
});
