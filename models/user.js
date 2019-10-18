'use strict';
module.exports = (sequelize, DataTypes) => {
  var User = sequelize.define('user' , {
        userId: {
         type: DataTypes.INTEGER,
         autoIncrement: true,
         allowNull: false,
         primaryKey: true
        },
        userName: {
         type: DataTypes.STRING,
         allowNull: false
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });
    return User;
};