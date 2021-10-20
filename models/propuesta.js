const Sequelize = require('sequelize');

const Propuesta = (sequelize)=>{
    sequelize.define('propuesta', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        titulo: {
            type: Sequelize.STRING(255),
            allowNull: false
        },
        descripcion: {
            type: Sequelize.STRING(2500),
            allowNull: false
        }
    })
};

module.exports = Propuesta;