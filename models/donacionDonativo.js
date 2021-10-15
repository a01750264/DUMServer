const Sequelize = require('sequelize');

const DonacionDonativo = (sequelize)=>{
    sequelize.define('donacionDonativo',{
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

module.exports = DonacionDonativo;