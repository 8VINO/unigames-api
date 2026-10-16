import { Sequelize } from 'sequelize';
import dbConfig from './db.config.js';
import desenvolvedoraModel from '../models/desenvolvedora.model.js';
import generoModel from '../models/genero.model.js';

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

const db = {
    Desenvolvedora,
    Genero,
    sequelize,
    Sequelize
};

export default db;