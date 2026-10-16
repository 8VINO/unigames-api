import { Sequelize } from 'sequelize';
import dbConfig from './db.config.js';
import desenvolvedoraModel from '../models/desenvolvedora.model.js';
import generoModel from '../models/genero.model.js';
import jogoModel from '../models/jogo.model.js';
import jogoGeneroModel from '../models/jogoGenero.model.js';

const sequelize = new Sequelize(
    dbConfig.NAME,
    dbConfig.USER,
    dbConfig.PASSWORD,

    {
        host: dbConfig.HOST,
        port: dbConfig.PORT,
        dialect: dbConfig.dialect,
        dialectOptions: dbConfig.dialectOptions,
        logging: false
    }
);

const Desenvolvedora = desenvolvedoraModel(sequelize);
const Genero = generoModel(sequelize);
const Jogo = jogoModel(sequelize);
const JogoGenero = jogoGeneroModel(sequelize);


Desenvolvedora.hasMany(Jogo, {
    foreignKey: 'desenvolvedora_id',
});

Jogo.belongsTo(Desenvolvedora, {
    foreignKey: 'desenvolvedora_id',
    as: 'desenvolvedora'
});


Jogo.belongsToMany(Genero, {
    through: JogoGenero,
    foreignKey: 'jogo_id',
    otherKey: 'genero_id',
    as: 'generos'
});

Genero.belongsToMany(Jogo, {
    through: JogoGenero,
    foreignKey: 'genero_id',
    otherKey: 'jogo_id',
    as: 'jogos'
});


const db = {
    Desenvolvedora,
    Genero,
    Jogo,
    JogoGenero,
    sequelize,
    Sequelize
};

export default db;