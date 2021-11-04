const sequelize = require('sequelize');
const db = require('./db');

const Image = db.define("image", {
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
   
});

//Image.sync();
//Image.sync({ force: true }) 

module.exports = Image;