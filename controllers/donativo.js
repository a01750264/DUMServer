const Sequelize = require('sequelize');
const sequelize = require('../util/db');
const Donativo = sequelize.models.donativo;

exports.postCrearDonativo = (req, res)=>{
    Donativo.create({
        nombre: req.body.nombreDonativo,
        descripcion: req.body.descripcionDonativo,
        maxParticipantes: req.body.participantesDonativo
    }).then(resultado=>{
        console.log(resultado);
        res.status(200).json({
            message: "Donativo created"
        });
    }).catch(err=>{
        console.log(err);
        res.status(500).json({
            error: err
        });
    });
};