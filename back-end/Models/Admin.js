const sequelize = require("sequelize");
const db = require('./db');

const Admin = db.define('Admins', {
    id: {
        type: sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    email: {
        type: sequelize.STRING,
        allowNull: false
    },
    senha: {
        type: sequelize.CHAR,
        allowNull: false
    }
});

//Admin.sync();

module.exports = Admin;