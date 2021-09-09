function applyRelations(sequelize){
    console.log(sequelize.models);
    const Donante = sequelize.models.donante;
    const Administrador = sequelize.models.administrador;
    const Donacion = sequelize.models.donacion;
    const Iniciativa = sequelize.models.iniciativa;

    Donante.hasMany(Donacion);
    Donacion.belongsTo(Donante);
    Iniciativa.hasMany(Donacion);
    Donacion.belongsTo(Iniciativa);
};

module.exports = {applyRelations};