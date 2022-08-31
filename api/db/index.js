const Sequelize = require("sequelize");

const sequelize = new Sequelize("TMDB", null, null, {
  host: "localhost",
  dialect: "postgres",
  logging: false,
});

module.exports = sequelize;
