const express = require("express");
const route = express.Router();

const User = require("../models/Users.js");

const userController = require("../controllers/AuthenticationController");

// @route: POST api/auth/register
// desc: register
// access: Public
route.post("/register", userController.create);



module.exports = route;