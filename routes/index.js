var express = require("express");
var router = express.Router();
const formatedDate = require("date-fns/formatDistanceToNow");

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
  },
];

router.get("/", function (req, res, next) {
  res.render("index", {
    title: "Mini Messageboard",
    messages: messages,
    format: formatedDate,
  });
});

router.get("/new", function (req, res, next) {
  res.render("form");
});

router.post("/new", function (req, res) {
  const messageText = req.body.message;
  const messageUsername = req.body.username;
  messages.push({
    text: messageText,
    user: messageUsername,
    added: new Date(),
  });
  res.redirect("/");
});

module.exports = router;