const { Sequelize } = require ('sequelize');

const db = new Sequelize({
    database: "GuitarStoreV1",
    port: 5432,
    host: "localhost",
    username: "postgres",
    password: "root",
    dialect:"postgres",
    logging: false
});

module.exports = db;