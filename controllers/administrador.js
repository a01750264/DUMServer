const Sequelize = require('sequelize');
const sequelize = require('../util/db');
const Administrador = sequelize.models.administrador;
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.postSignUp = (req, res)=>{
    bcrypt.hash(req.body.adminPass, 10, function(err, hash) {
        if (err)
        {
            return res.status(500).json({
                error: err
            });
        } else {
            Administrador.create({
                nombre: req.body.adminNombre,
                apellidoP: req.body.adminApellidoP,
                apellidoM: req.body.adminApellidoM,
                email: req.body.adminEmail,
                userName: req.body.adminUserName,
                password: hash
            }).then(resultado=>{
                console.log(resultado);
                console.log("Registro exitoso");
                return res.status(200).json({
                    message: "Register successful"
                });
            }).catch(err=>{
                console.log(err);
                res.status(500).json({
                    error: err
                });
            });
        }
    });
};


exports.postLogIn = (req, res)=>{
    Administrador.findOne({
        where: {
            email: req.body.adminEmail
        }
    }).then(admin=>{
        if (admin == null)
        {
            return res.status(401).json({
                message: "Authentication failed"
            });
        }
        bcrypt.compare(req.body.adminPass, admin.password, function(err, result){
            if (err)
            {
                console.log(err);
                return res.status(500).json({
                    error: err
                });
            }
            if (result)
            {
                const payload = {
                    adminEmail: admin.email,
                    adminId: admin.id,
                }
                const token = jwt.sign(payload, process.env.JWT_SECRET, {
                    expiresIn: process.env.JWT_EXPIRES_IN
                });
                return res.status(200).json({
                    message: "Authentication successful",
                    token: token
                });
            } else {
                return res.status(401).json({
                    error: "Authentication failed"
                });
            };
        });
    });
};
