const Sequelize = require('sequelize');
const db = require('../db');

const Cliente = db.define('cliente', {
    id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nome:{
        type: Sequelize.STRING,
        allowNull: false
    },
    sobrenome:{
        type: Sequelize.STRING,
        allowNull: false
    }, 
    cpf:{
        type: Sequelize.STRING,
        allowNull: false
    }, 
    email:{
        type: Sequelize.STRING,
        allowNull: false
    }, 
    senha:{
        type: Sequelize.STRING,
        allowNull: false
    }, 
}, {
    timestamp: false,
    createdAt: false,
    updatedAt: false
});

module.exports = Cliente;