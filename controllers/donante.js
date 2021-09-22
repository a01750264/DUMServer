const Sequelize = require('sequelize');
const sequelize = require('../util/db');
const Donante = sequelize.models.donante;
const { response } = require('express');
const sendEmail = require('../util/verif-code');

exports.postSignUp = (req, res)=>{
    console.log(req.body);
    code = Math.floor(Math.random() * (9999 - 1000)) + 1000;
    Donante.create({
        nombre: req.body.donanteNombre,
        apellidoP: req.body.donanteApellidoP,
        apellidoM: req.body.donanteApellidoM,
        email: req.body.donanteEmail,
        userName: req.body.donanteUserName,
        password: req.body.donantePass,
        fecha_nacimiento: req.body.donanteFecha
    }).then(resultado=>{
        console.log(resultado);
        console.log("Registro exitoso");
        sendEmail(req.body.donanteEmail, code)
        return res.status(200).json({
            message: "Registro exitoso"
        });
    }).catch(err=>{
        console.log(err);
        return res.status(500).json({
            error: err
        });
    });
};