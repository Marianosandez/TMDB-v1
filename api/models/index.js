const User = require("./user");
const Film = require("./film");

User.belongsToMany(Film, { as: "favorites", through: "favorites_films" });
Film.belongsToMany(User, { as: "favorites", through: "favorites_films" });

module.exports = { Film, User };
