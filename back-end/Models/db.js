const Sequelize  = require("sequelize");

const conexão = new Sequelize('lermais', 'root', 'Thiago200720', {
    host: 'localhost',
    dialect: 'mysql'
});

conexão.authenticate()
.then(() => {
    console.log('Conexão com o Banco De dados realizada com sucesso');
}).catch (() => {
    console.log('ERRO: Conexão com o Banco De Dados NÃO realizada com sucesso!');
});

module.exports = conexão;
