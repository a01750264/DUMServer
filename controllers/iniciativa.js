const Sequelize = require('sequelize');
const sequelize = require('../util/db');
const Iniciativa = sequelize.models.iniciativa;
const { response } = require('express');

exports.postCrearIniciativa = (req, res)=>{
    Iniciativa.create({
        nombre: req.body.nombreIniciativa,
        descripcion: req.body.descripcionIniciativa,
        maxParticipantes: req.body.participantesIniciativa
    }).then(resultado=>{
        console.log(resultado);
        res.status(200).json({
            message: "Iniciativa created"
        });
    }).catch(err=>{
        console.log(err);
        res.status(500).json({
            error: err
        });
    });
};
