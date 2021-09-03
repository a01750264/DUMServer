const express = require('express');
const path = require('path');
const bodyParser = require('body-parser')
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

const puerto = 8080;

app.listen(puerto, ()=>{
    console.log(`Servidor en línea en el puerto: ${puerto}`)
    console.log("hola");
})