const sequelize = require('sequelize');
const db = require('./db');

const User = db.define('usuarios', {
    id: {
        type: sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nome: {
        type: sequelize.STRING,
        allowNull: false
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

//User.sync();
//User.sync({ force: true }) 

module.exports = User;