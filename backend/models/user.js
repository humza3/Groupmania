const Sequelize = require("sequelize");
const connection = require("../connection");

const user = connection.define('user', {
	employee_id: {
      type: Sequelize.INTEGER(11).UNSIGNED.ZEROFILL,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    email: {
      type: Sequelize.STRING(50),
      allowNull: false,
      unique: true
    },
    firstname: {
      type: Sequelize.STRING(50),
      allowNull: false
    },
    lastname: {
      type: Sequelize.STRING(50),
      allowNull: false
    },
    password: {
      type: Sequelize.STRING(100),
      allowNull: false
    },
    admin: {
      type: Sequelize.INTEGER(1).UNSIGNED,
      values: [0, 1],
      defaultValue: 0
    },
  }, {
    timestamps: false
})

module.exports = user;
