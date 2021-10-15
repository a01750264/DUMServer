function applyRelations(sequelize){
    console.log(sequelize.models);
    const Donante = sequelize.models.donante;
    const Donacion = sequelize.models.donacion;
    const Iniciativa = sequelize.models.iniciativa;
    const DonacionDonativo = sequelize.models.donacionDonativo;
    const Donativo = sequelize.models.donativo

    Donante.hasMany(Donacion);
    Donante.hasMany(DonacionDonativo);
    Donacion.belongsTo(Donante);
    DonacionDonativo.belongsTo(Donante);

    Iniciativa.hasMany(Donacion);
    Donacion.belongsTo(Iniciativa);

    Donativo.hasMany(DonacionDonativo);
    DonacionDonativo.belongsTo(Donativo);
};

module.exports = {applyRelations};