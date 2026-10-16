const jogoGenero = (sequelize) => {
    return sequelize.define('JogoGenero', {}, {

        underscored: true,
        tableName: 'jogos_generos',
        timestamps: true,

    });
};

export default jogoGenero;