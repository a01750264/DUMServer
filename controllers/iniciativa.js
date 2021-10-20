const Sequelize = require('sequelize');
const sequelize = require('../util/db');
const Iniciativa = sequelize.models.iniciativa;
const { response } = require('express');


exports.getVerIniciativas = (req, res)=>{
    Iniciativa.findAll()
    .then(iniciativas=>{
        if (iniciativas.length != 0)
        {
            var data = []
            iniciativas.forEach(iniciativa=>{
                var json = iniciativa.dataValues
                data.push(json)
            });
            res.status(200).send(data);
        } else {
            res.status(500).json({
                error: "No Iniciativas found"
            })
        };
    }).catch(err=>{
        console.log(err);
        res.status(500).json({
            error: err
        });
    });
};


exports.postVerIniciativa = (req, res)=>{
    Iniciativa.findOne({
        where: {
            id: req.body.iniciativaId
        }
    }).then(iniciativa=>{
        if (iniciativa != null)
        {
            res.status(200).send(iniciativa.dataValues)
        } else {
            res.status(404).json({
                error: "Iniciativa not found"
            });
        };
    }).catch(err=>{
        console.log(err);
        res.status(500).json({
            error: err
        });
    });
};


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


exports.deleteIniciativa = (req, res)=>{
    Iniciativa.findOne({
        where: {
            id: req.body.iniciativa
        }
    }).then(iniciativa=>{
        if (iniciativa != null)
        {
            iniciativa.destroy()
            .then(resultado=>{
                console.log("Iniciativa deleted")
                res.status(200).json({
                    message: "Iniciativa deleted"
                });
            }).catch(err=>{
                console.log(err);
                res.status(500).json({
                    error : err
                });
            });
        } else {
            res.status(404).json({
                error: `Iniciativa ${req.body.iniciativa} does not exist`
            })
        };
    }).catch(err=>{
        console.log(err);
        res.status(500).json({
            error: err
        });
    });
};
