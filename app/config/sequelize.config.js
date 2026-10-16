import { Sequelize } from 'sequelize';
import dbConfig from './db.config.js';
import desenvolvedoraModel from '../models/desenvolvedora.model.js';

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

const db = {
    Desenvolvedora,
    sequelize,
    Sequelize
};

export default db;