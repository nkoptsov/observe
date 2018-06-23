require('dotenv').config();

module.exports = {
  development: {
    username: process.env.DB_USERNAME,
    password: null,
    database: process.env.DB_DEVELOPMENT,
    host: process.env.DB_HOSTNAME,
    dialect: 'postgres',
  },
  test: {
    username: 'nikita',
    password: null,
    database: 'easygo_test',
    host: 'localhost',
    dialect: 'postgres',
  },
  production: {
    username: 'root',
    password: null,
    database: 'database_production',
    host: 'localhost',
    dialect: 'postgres',
  },
};
