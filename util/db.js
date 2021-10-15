const Sequelize = require('sequelize');
const {applyRelations} = require('./relations');
const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,{
    dialect: 'mssql',
    dialectOptions: {
        options: {
            useUTC: false,
            dateFirst: 1
        }
    },
    define: {
        timestamps: false,
        freezeTableName: true
    }
});

const modelDefiners = [
    require('../models/administrador'),
    require('../models/donacion'),
    require('../models/donante'),
    require('../models/iniciativa'),
    require('../models/donativo'),
    require('../models/donacionDonativo')
];

for (const modelDefiner of modelDefiners){
    modelDefiner(sequelize);
};

applyRelations(sequelize);
module.exports = sequelize;
