// -------- Modulos requeridos ----------
const express = require('express')
const mysql = require('mysql')
const myconn = require('express-myconnection')
const routes = require('./routes')

// --------- Conexion a DB -----------
const app = express()
app.set('port', process.env.PORT || 9000)
const dbSettings = {
    host: 'aws.connect.psdb.cloud',
    port: '3306',
    user: 'eiaw2bp9d2cjk69wa27c',
    password: 'pscale_pw_JH423g05VtfHILjjJJv6AH8n2RdA2WRtcqynA4X0vHQ',
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