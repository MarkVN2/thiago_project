const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('sequelize_test_db', 'root', 'markos', {
  host: 'localhost',
  dialect: 'mysql',
});

module.exports = sequelize;