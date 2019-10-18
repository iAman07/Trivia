'use strict';
module.exports = (sequelize, DataTypes) => {
  var Ques = sequelize.define('questions' , {
        quesID: {
         type: DataTypes.INTEGER,
         autoIncrement: true,
         allowNull: false,
         primaryKey: true
        },
        Question: {
         type: DataTypes.STRING,
         allowNull: false
        },
        OptionA: {
            type: DataTypes.STRING,
            allowNull: false
        },
        OptionB: {
            type: DataTypes.STRING,
            allowNull: false
        },
        OptionC: {
            type: DataTypes.STRING,
            allowNull: false
        },
        OptionD: {
            type: DataTypes.STRING,
            allowNull: false
        },
        CorrectAns: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });
    return Ques;
};