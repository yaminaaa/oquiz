const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('oquizsb', 'oquizsb', 'oquizsb', {
  host: 'localhost',
  dialect: 'postgres', /* one of 'mysql' | 'postgres' | 'sqlite' | 'mariadb' | 'mssql' | 'db2' | 'snowflake' | 'oracle' */
  define: {
    updatedAt: 'updated_at',
    createdAt: 'created_at'
  }
});


module.exports = sequelize;