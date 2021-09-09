const Sequelize = require('sequelize');

const Donacion = (sequelize)=>{
    sequelize.define('donacion',{
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        cantidad: {
            type: Sequelize.FLOAT,
            allowNull: false,
            default: 0.0
        }
    })
};

module.exports = Donacion;