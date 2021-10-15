const Sequelize = require('sequelize')

const Donativo = (sequelize)=>{
    sequelize.define('donativo', {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        nombre: {
            type: Sequelize.STRING(100),
            allowNull: false
        },
        descripcion: {
            type: Sequelize.STRING(2500),
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
    })
};

module.exports = Donativo;