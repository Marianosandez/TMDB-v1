const Sequelize = require("sequelize");
const db = require("../db/index");

class Film extends Sequelize.Model {}

Film.init(
  {
    jsonData: {
      type: Sequelize.TEXT,
    },
  },
  {
    sequelize: db,
    modelName: "film",
  }
);

module.exports = Film;
