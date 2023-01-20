const { Model, DataTypes } = require("sequelize");
const sequelize = require('../db');

class Quiz extends Model { }

Quiz.init({
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
    sequelize,
    tableName: "quiz"
});

module.exports = Quiz;