
  const { DataTypes, Model } = require('sequelize');
  const sequelize = require('../db');
  
  class User extends Model {}
  
  User.init({
    email: {
      type: DataTypes.STRING
    },
    password: {
      type: DataTypes.STRING
    },
    firstname: {
      type: DataTypes.STRING
    },
    lastname: {
      type: DataTypes.STRING
    },
    role: {
      type: DataTypes.STRING
    },
  }, {
    sequelize,
    tableName: 'user'
  });
  
  module.exports = User;