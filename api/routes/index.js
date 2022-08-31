const express = require("express");
const passport = require("passport");
const { Film } = require("../models");

const router = express.Router();

const User = require("../models/user");

router.post("/register", (req, res) => {
  User.create(req.body).then((user) => {
    res.status(201).send(user);
  });
});

router.post("/login", passport.authenticate("local"), (req, res) => {
  const user = req.user;
  res.json({ user });
});

router.get("/me", (req, res) => {
  if (!req.user) {
    return;
  }
  const { id, email } = req.user.dataValues;
  res.json({ id: id, email: email });
});

router.post("/logout", (req, res, next) => {
  req.logOut(function (err) {
    if (err) {
      return next(err);
    }
    res.redirect("/");
  });
});

router.post("/favorites", (req, res) => {
  Film.findOrCreate({
    where: {
      id: req.body.filmId,
      jsonData: req.body.jsonData,
    },
  })
    .then(() => User.findByPk(req.body.userId))
    .then((user) => user.addFavorite(req.body.filmId))
    .then(() => {
      res.sendStatus(200);
    })
    .catch((err) => console.log(err));
});

router.delete("/favorites", (req, res) => {
  User.findByPk(req.body.userId)
    .then((user) => user.removeFavorite(req.body.filmId))
    .then(() => res.sendStatus(200))
    .catch((err) => res.status(500).send(err));
});

router.get("/favorites/:id", (req, res) => {
  User.findByPk(req.params.id)
    .then((user) => user.getFavorites())
    .then((result) => res.status(200).send(result))
    .catch((err) => console.log(err));
});

router.get("/friends", (req, res) => {
  const friendEmail = req.query.email;
  const currentId = req.query.id;

  User.findFriend(friendEmail, currentId)
    .then((result) => res.status(200).send(result))
    .catch((err) => console.log(err));
});
module.exports = router;
