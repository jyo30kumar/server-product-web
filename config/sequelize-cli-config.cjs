require('dotenv').config();

const DB_NAME_DEV = process.env.DB_NAME_DEV;
const DB_USERNAME_DEV = process.env.DB_USERNAME_DEV;
const DB_PASSWORD_DEV = process.env.DB_PASSWORD_DEV;
const DB_HOST_DEV = process.env.DB_HOST_DEV;
const DB_DIALECT_DEV = process.env.DB_DIALECT_DEV;

const DB_NAME_PROD = process.env.DB_NAME_PROD;
const DB_USERNAME_PROD = process.env.DB_USERNAME_PROD;
const DB_PASSWORD_PROD = process.env.DB_PASSWORD_PROD;
const DB_HOST_PROD = process.env.DB_HOST_PROD;
const DB_DIALECT_PROD = process.env.DB_DIALECT_PROD;

module.exports = {
  development: {
    username: DB_USERNAME_DEV,
    password: DB_PASSWORD_DEV,
    database: DB_NAME_DEV,
    host: DB_HOST_DEV,
    dialect: DB_DIALECT_DEV,
    migrationStorage: 'sequelize',
    migrationStorageTableName: 'Migrations',
    seederStorage: 'sequelize',
    seederStorageTableName: 'Seeders',
  },
  production: {
    username: DB_USERNAME_PROD,
    password: DB_PASSWORD_PROD,
    database: DB_NAME_PROD,
    host: DB_HOST_PROD,
    dialect: DB_DIALECT_PROD,
    port: process.env.DB_PORT_PROD,
    migrationStorage: 'sequelize',
    migrationStorageTableName: 'Migrations',
    seederStorage: 'sequelize',
    seederStorageTableName: 'Seeders',
  },
};
