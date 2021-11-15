const sequelize = require('sequelize');
const db = require('./db');

const Livros = db.define("Livros", {
    id: {
        type: sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    titulo: {
        type: sequelize.STRING,
        allowNull: false
    },
    descricao: {
        type: sequelize.STRING,
        allowNull: false
    },
});

//Livros.sync();
//Livros.sync({ force: true }) 

module.exports = Livros;