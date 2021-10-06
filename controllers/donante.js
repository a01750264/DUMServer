const Sequelize = require('sequelize');
const sequelize = require('../util/db');
const Donante = sequelize.models.donante;
const { response } = require('express');
const sendEmail = require('../util/verif-code');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


exports.getDonantes = (req, res)=>{
    Donante.findAll()
    .then(donantes=>{
        var data = [];
        donantes.forEach(donante=>{
            data.push(donante.dataValues);
        });
        console.log(data);
        return res.status(200).json({
            donantes: data
        });
    }).catch(err=>{
        console.log(err);
        return res.status(500).json({
            error: err
        });
    });
};


exports.getInfoDonante = (req, res)=>{
    Donante.findOne({
        where: {
            id: req.userData.donanteId
        }
    }).then(donante=>{
        console.log(donante);
        return res.status(200).json({
            donante: {
                nombre: donante.nombre,
                apellidoP: donante.apellidoP,
                apellidoM: donante.apellidoM,
                email: donante.email,
                donaciones: donante.donacionesT,
                userName: donante.userName
            }
        });
    }).catch(err=>{
        return res.status(500).json({
            error: err
        });
    });
};


exports.postSignUp = (req, res)=>{
    console.log(req.body);
    bcrypt.hash(req.body.donantePass, 10, function(err, hash) {
        if (err)
        {
            return res.status(500).json({
                error: err
            })
        } else {
            code = Math.floor(Math.random() * (9999 - 1000)) + 1000;
            Donante.create({
                nombre: req.body.donanteNombre,
                apellidoP: req.body.donanteApellidoP,
                apellidoM: req.body.donanteApellidoM,
                email: req.body.donanteEmail,
                userName: req.body.donanteUserName,
                password: hash,
                fecha_nacimiento: req.body.donanteFecha
            }).then(resultado=>{
                console.log(resultado);
                console.log("Registro exitoso");
                sendEmail(req.body.donanteEmail, code)
                return res.status(200).json({
                    message: "Register successful"
                });
            }).catch(err=>{
                console.log(err);
                return res.status(500).json({
                    error: err
                });
            });
        }
    }); 
};


exports.postLogIn = (req, res)=>{
    Donante.findOne({
        where: {
            email: req.body.donanteData
        }
    }).then(donante=>{
        if (donante == null)
        {
            Donante.findOne({
                where: {
                    userName: req.body.donanteData
                }
            }).then(donante=>{
                if (donante == null)
                {
                    return res.status(401).json({
                        error: "Authentication failed"
                    });
                }
                bcrypt.compare(req.body.donantePassword, donante.password, function(err, result){
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
                            donanteEmail: donante.email,
                            donanteId: donante.id,
                            donanteUserName: donante.userName
                        }
                        const token  = jwt.sign(payload, process.env.JWT_SECRET, {
                            expiresIn: process.env.JWT_EXPIRES_IN
                        });
                        return res.status(200).json({
                            message: "Authentication successfull",
                            token: token
                        });
                    } else {
                        return res.status(401).json({
                            error: "Authentication failed"
                        });
                    }
                });
            });
        } else {
            bcrypt.compare(req.body.donantePassword, donante.password, function(err, result){
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
                        donanteEmail: donante.email,
                        donanteId: donante.id,
                        donanteUserName: donante.userName
                    }
                    const token = jwt.sign(payload, process.env.JWT_SECRET, {
                        expiresIn: process.env.JWT_EXPIRES_IN
                    });
                    return res.status(200).json({
                        message: "Authentication successfull",
                        token: token
                    });
                } else {
                    return res.status(401).json({
                        error: "Authentication failed"
                    });
                }
            });
        }
    });
};