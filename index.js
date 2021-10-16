const express = require('express');
const path = require('path');
const bodyParser = require('body-parser')
const dotenv = require('dotenv');
dotenv.config()
const donanteRoutes = require('./routes/donante');
const administradorRoutes = require('./routes/administrador');
const iniciaticaRoutes = require('./routes/iniciativa');
const donativoRoutes = require('./routes/donativo');
const app = express();
const sequelize = require('./util/db');
const { appendFileSync } = require('fs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use('/donante', donanteRoutes);
app.use('/administrador',administradorRoutes);
app.use('/iniciativa', iniciaticaRoutes);
app.use('/donativo', donativoRoutes);

const puerto = 8080;

sequelize.sync({force:true})
    .then(resultado=>{
        console.log("¡Conexión a base de datos exitosa!");
        app.listen(puerto, ()=>console.log(`Servidor en línea en el puerto: ${puerto}`));
    })
    .catch(err=>console.log(err));
