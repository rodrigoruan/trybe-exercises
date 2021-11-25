const User = (sequelize, DataTypes) =>
  sequelize.define('User', {
    fullName: DataTypes.STRING,
    email: DataTypes.STRING,
  });

module.exports = User;
