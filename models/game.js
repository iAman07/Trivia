'use strict';
module.exports = (sequelize, DataTypes) => {
  var Games = sequelize.define('games' , {
        gameId: {
         type: DataTypes.INTEGER,
         autoIncrement: true,
         allowNull: false,
         primaryKey: true
        },
        user1: {
         type: DataTypes.STRING,
         allowNull: false
        },
        user2: {
         type: DataTypes.STRING,
         allowNull: false
        },
        winner: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });
  return Games;
};