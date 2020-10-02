const {Model} = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    email: DataTypes.STRING,
    FirstName: DataTypes.STRING,
    LastName: DataTypes.STRING,
    Password: DataTypes.STRING,
    Admin: DataTypes.BOOLEAN
  }, {});

  return User;
};