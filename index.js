const express = require('express');
const path = require('path');
const bodyParser = require('body-parser')
const dotenv = require('dotenv');
dotenv.config()
const app = express();
const sequelize = require('./util/db');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

const puerto = 8080;

sequelize.sync({force:true})
    .then(resultado=>{
        console.log("¡Conexión a base de datos exitosa!");
        app.listen(puerto, ()=>console.log(`Servidor en línea en el puerto: ${puerto}`));
    })
    .catch(err=>console.log(err));
