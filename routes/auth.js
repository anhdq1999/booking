const express = require("express");
const router = express.Router;
const jwt = require("jsonwebtoken");
// const bodyParser  = require("body-parser");
//
// const jsonParser = bodyParser.json()
const User = require("../models/Users.js");

// @router POST /api/auth/register
// desc Register
// access Public
router("/register", async (req, res) => {
  // get username, password from request
  const { username, password } = req.body;
  // check username, password is missing
  if (!username || !password) {
    return res.status(400).json({ success: false, message: "Missing username or password" });
  }
  try {
    // find user in database
    const user = await User.findOne({ username: username });
    if (user) {
      return res.status(400).json({ success: false, message: "User already taken" });
    }
    const newUser = new User({ username, password });
    await newUser.save();
    // const accessToken = jwt.sign({ userId: newUser._id }, process.env.ACCESS_TOKEN_SECRET);
    res.json({
      success: true, message: "User created successfully"
      // accessToken
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
});

module.exports = router;