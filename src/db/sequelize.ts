import {Sequelize} from 'sequelize';
import {DB_HOST, DB_NAME, DB_PASSWORD, DB_PORT, DB_USER} from "../config";

export const sequelize = new Sequelize({
    dialect: 'mysql',
    host: DB_HOST,
    port: Number(DB_PORT) ?? 0,
    username: DB_USER,
    password: DB_PASSWORD,
    database: DB_NAME,
    logging: false
});
