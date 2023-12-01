import logger from 'logging-starter';
import {sequelize} from "./sequelize";
import {DB_NAME} from "../config";

export const initDb = async () => {
    try {
        await sequelize.query(`CREATE DATABASE IF NOT EXISTS ${DB_NAME};`);
        await sequelize.query(`USE grocery_db;`);
        // language=SQL format=false
        const productTableQuery = `CREATE TABLE IF NOT EXISTS products (
            id INT PRIMARY KEY AUTO_INCREMENT,
            name VARCHAR(255) NOT NULL,
            price DECIMAL(10, 2) NOT NULL,
            quantity INT NOT NULL,
            createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            updatedAt TIMESTAMP 
        );`

        await sequelize.query(productTableQuery);

        const orderTableQuery = `CREATE TABLE IF NOT EXISTS orders (
            id INT PRIMARY KEY AUTO_INCREMENT,
            totalAmount DECIMAL(10, 2) NOT NULL,
            products JSON NOT NULL,
            createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            updatedAt TIMESTAMP 
        );`

        await sequelize.query(orderTableQuery);

        logger.info({message: 'Database and table created successfully if not exists.'});
    } catch (error: unknown) {
        logger.error({errorMessage: 'Error creating database and table:', error: error as Error});
        throw error
    }
}
