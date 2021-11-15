const sequelize = require('sequelize');
const db = require('./db');

const Sliders = db.define('sliders', {
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
    local: {
        type: sequelize.STRING,
        allowNull: false
    },
    image: {
        type: sequelize.STRING, 
        allowNull: false
    }
});

//Sliders.sync();
//Sliders.sync({force: true});

module.exports = Sliders;