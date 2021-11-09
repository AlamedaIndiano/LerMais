const sequelize = require('sequelize');
const db = require('./db');

const Locais = db.define('locais', {
    id: {
        type: sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    image: {
        type: sequelize.STRING,
        allowNull: false
    },
    local: {
        type: sequelize.STRING,
        allowNull: false
    },
    descricao: {
        type: sequelize.STRING,
        allowNull: false
    },
    data_sabado: {
        type: sequelize.STRING,
        allowNull: false
    },
    data_domingo: {
        type: sequelize.STRING,
        allowNull: false
    },
    endereco: {
        type: sequelize.STRING,
        allowNull: false
    },
    mapa: {
        type: sequelize.STRING,
        allowNull: false
    }
});

//Locais.sync();
//Locais.sync({force: true})

module.exports = Locais;