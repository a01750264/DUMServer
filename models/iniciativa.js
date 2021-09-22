const Sequelize = require('sequelize');

const Iniciativa = (sequelize)=>{
    sequelize.define('iniciativa', {
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
        descripcion: {
            type: Sequelize.STRING(2500),
            allowNull: false
        },
        imageURL: {
            type: Sequelize.STRING(100),
            allowNull: false
        },
        participantesT: {
            type: Sequelize.INTEGER,
            allowNull: false,
            default: 0
        },
        maxParticipantes: {
            type: Sequelize.INTEGER,
            allowNull: true,
        },
        maxDonaciones: {
            type: Sequelize.FLOAT,
            allowNull: true
        }
    })
};

module.exports = Iniciativa;