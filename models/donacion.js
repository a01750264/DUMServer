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
            defaultValue: 0.0
        },
        fecha: {
            type: Sequelize.DATEONLY,
            allowNull: false,
            defaultValue: Sequelize.DataTypes.NOW
        }
    })
};

module.exports = Donacion;