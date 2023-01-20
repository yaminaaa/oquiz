const { DataTypes, Model } = require('sequelize');
const sequelize = require('../db');

class Answer extends Model { }

Answer.init({
    description: {
        type: DataTypes.STRING,
    },
    question_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
    sequelize,
    tableName: 'answer'
});

module.exports = Answer;