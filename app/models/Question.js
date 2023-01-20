const { Model, DataTypes } = require("sequelize");
const sequelize = require('../db');

class Question extends Model { }

Question.init({
    question: {
        type: DataTypes.STRING,
        allowNull: false
    },
    anecdote: DataTypes.STRING,
    wiki: DataTypes.STRING,
    level_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    answer_id: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    quiz_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
    sequelize,
    tableName: 'question'
})

module.exports = Question;