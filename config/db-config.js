import { Sequelize } from "sequelize";

// for production development
const DB_NAME = process.env.DB_NAME_DEV;
const DB_USERNAME = process.env.DB_USERNAME_DEV;
const DB_PASSWORD = process.env.DB_PASSWORD_DEV; 
const DB_HOST = process.env.DB_HOST_DEV;
const DB_DIALECT = process.env.DB_DIALECT_DEV;
const db = new Sequelize(
  DB_NAME,
  DB_USERNAME,
  DB_PASSWORD,
  {
    host: DB_HOST,
    dialect: DB_DIALECT,
    logging:false,
  }
);

// for production 
// const DB_NAME = process.env.DB_NAME_PROD;
// const DB_USERNAME = process.env.DB_USERNAME_PROD;
// const DB_PASSWORD = process.env.DB_PASSWORD_PROD; 
// const DB_HOST = process.env.DB_HOST_PROD;
// const DB_DIALECT = process.env.DB_DIALECT_PROD;
// const db = new Sequelize(
//   DB_NAME,
//   DB_USERNAME,
//   DB_PASSWORD,
//   {
//     host: DB_HOST,
//     dialect: DB_DIALECT,
//     logging:false,
//   }
// );

export { db };
