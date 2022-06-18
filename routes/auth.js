const express = require("express");
const { append } = require("express/lib/response");
const router = express.Router();
const mongoose = require("mongoose");
const User = mongoose.model("User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../keys");

router.post("/signup", (req, res) => {
  console.log("post response is : ", req.body);
  const { name, email, password } = req.body;
  if (!email || !password || !name) {
    return res
      .status(422)
      .json({ error: "please fill out all the missing fields" });
  }
  User.findOne({ email: email }).then((savedUser) => {
    if (savedUser) {
      return res.status(422).json({ error: "email already exists" });
    }
    bcrypt.hash(password, 12).then((hashedpassword) => {
      const user = new User({
        email,
        password: hashedpassword,
        name,
      });
    });
  });
});

module.exports = router;
