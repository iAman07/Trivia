const Sequelize = require('sequelize');

const sequelize = new Sequelize('trivia','root','iAmAn@007',{
    dialect: 'mysql',
    host: 'localhost'
});

module.exports = sequelize;