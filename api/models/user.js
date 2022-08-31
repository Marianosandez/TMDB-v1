const Sequelize = require("sequelize");
const db = require("../db/index");
const bcrypt = require("bcrypt");

class User extends Sequelize.Model {
  static findFriend(searchterm, id) {
    return User.findAll({
      where: {
        [Sequelize.Op.and]: [
          {
            email: { [Sequelize.Op.like]: `%${searchterm}%` },
          },
          { id: { [Sequelize.Op.not]: id } },
        ],
      },
    });
  }
  hash(password, salt) {
    return bcrypt.hash(password, salt);
  }
}

User.init(
  {
    username: {
      type: Sequelize.STRING,
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    password: {
      type: Sequelize.STRING,
    },
    salt: {
      type: Sequelize.STRING,
    },
  },
  {
    sequelize: db,
    modelName: "User",
  }
);

User.beforeCreate((user) => {
  return bcrypt
    .genSalt(16)
    .then((salt) => {
      user.salt = salt;
      return user.hash(user.password, salt);
    })
    .then((hash) => {
      user.password = hash;
    });
});

module.exports = User;
