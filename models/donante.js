const Sequelize = require('sequelize');

const Donante = (sequelize)=>{
    sequelize.define('donante',{
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
        password: {
            type: Sequelize.STRING(255),
            allowNull: false
        },
        fecha_nacimiento: {
            type: Sequelize.DATEONLY,
            allowNull: false
        },
        donacionesT: {
            type: Sequelize.FLOAT,
            allowNull: false,
            defaultValue: 0.0
        },
        fecha_registro: {
            type: Sequelize.DATEONLY,
            allowNull: false,
            defaultValue: Sequelize.DataTypes.NOW
        }
    })
};

module.exports = Donante;