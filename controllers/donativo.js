const Sequelize = require('sequelize');
const sequelize = require('../util/db');
const Donativo = sequelize.models.donativo;


exports.getVerDonativos = (req, res)=>{
    Donativo.findAll()
    .then(donativos=>{
        if (donativos.length != 0)
        {
            var data = []
            donativos.forEach(donativo=>{
                var json = donativo.dataValues
                data.push(json)
            });
            res.status(200).send(data)
        } else {
            res.status(404).json({
                error: "No Donativos found"
            });
        };
    }).catch(err=>{
        console.log(err);
        res.status(500).json({
            error: err
        });
    });
};


exports.postCrearDonativo = (req, res)=>{
    Donativo.create({
        nombre: req.body.nombreDonativo,
        descripcion: req.body.descripcionDonativo,
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


exports.deleteDonativo = (req, res)=>{
    Donativo.findOne({
        where: {
            id: req.body.donativo
        }
    }).then(donativo=>{
        if (donativo != null)
        {
            donativo.destroy()
            .then(resultado=>{
                console.log("Donativo deleted")
                res.status(200).json({
                    message: "Donativo deleted"
                });
            }).catch(err=>{
                console.log(err);
                res.status(500).json({
                    error: err
                });
            });
        } else {
            res.status(404).json({
                message: `Donativo ${req.body.donativo} does not exist`
            });
        }
    }).catch(err=>{
        console.log(err);
        res.status(500).json({
            error: err
        });
    });
};