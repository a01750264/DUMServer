const Sequelize = require('sequelize');
const sequelize = require('../util/db');
const Propuesta = sequelize.models.propuesta;

exports.getPropuestas = (req, res)=>{
    Propuesta.findAll()
    .then(propuestas=>{
        if (propuestas.length != 0)
        {
            var data = []
            propuestas.forEach(propuesta=>{
                var json = propuesta.dataValues;
                data.push(json);
            });
            res.status(200).send(data);
        } else {
            res.status(404).json({
                error: "No Propuesta exists"
            });
        }
    }).catch(err=>{
        console.log(err);
        res.status(500).json({
            error: err
        });
    });
};

exports.postCrearPropuesta = (req, res)=>{
    Propuesta.create({
        titulo: req.body.propuestaTitulo,
        descripcion: req.body.propuestaDescripcion,
        donanteId: req.userData.donanteId
    }).then(resultado=>{
        console.log(`Propuesta ${req.body.propuestaTitulo} created`);
        res.status(200).json({
            message: `Propuesta ${req.body.propuestaTitulo} created`
        });
    }).catch(err=>{
        console.log(err);
        res.status(500).json({
            error: err
        });
    });
};