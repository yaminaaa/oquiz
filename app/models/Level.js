const { DataTypes, Model } = require('sequelize');
const sequelize = require('../db');

class Level extends Model {}

Level.init({
  name: {
    type: DataTypes.STRING
  }
}, {
  sequelize,
  tableName: 'level'
});

module.exports = Level;