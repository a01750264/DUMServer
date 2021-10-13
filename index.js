const express = require('express');
const https = require('https');
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser')
const dotenv = require('dotenv');
dotenv.config()
const donanteRoutes = require('./routes/donante');
const app = express();
const sequelize = require('./util/db');
const sslServer = https.createServer({
    key: fs.readFileSync('./cert/my_cert.key'),
    cert: fs.readFileSync('./cert/my_cert.crt')
}, app)

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use('/donante', donanteRoutes);

const puerto = 8080;

sequelize.sync({force:false})
    .then(resultado=>{
        console.log("¡Conexión a base de datos exitosa!");
        sslServer.listen(puerto, ()=>console.log(`Servidor HTTPS en línea en el puerto: ${puerto}`));
    })
    .catch(err=>console.log(err));
