const Sequelize = require('sequelize');

const Administrador = (sequelize)=>{
    sequelize.define('administrador',{
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        nombre: {
            type: Sequelize.STRING(100),
            allowNull: false
        },
        apellidoP: {
            type: Sequelize.STRING(30),
            allowNull: false
        },
        apellidoM: {
            type: Sequelize.STRING(30),
            allowNull: false
        },
        email: {
            type: Sequelize.STRING(50),
            allowNull: false,
            unique: true
        },
        userName: {
            type: Sequelize.STRING(15),
            allowNull: false,
            unique: true
        },
        password: {
            type: Sequelize.STRING(255),
            allowNull: false,
        }
    })
};

module.exports = Administrador;