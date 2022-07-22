const User = require("../models/Users");
const bcrypt = require("bcrypt");
// const config = require('../config/auth.config');
const auth = require("../middlewares");
const Mail = require("../mail/SendMail");
const crypto = require("crypto");
const response = require("../response");

class AuthenticationController {

  register = async (req, res) => {
    const user = await User.findOne({ email: req.body.email });
    if (user) {
      res.status(501).json(response.auth.REGISTER.FAILURE("User is exited"));
    } else {
      const OTP = crypto.randomBytes(4).toString("hex");
      req.body.hash_password = bcrypt.hashSync(req.body.password, 10);
      const newUser = new User({ ...req.body, OTP });
      try {
        // const savedUser = await newUser.save();
        res.status(200).json(response.auth.REGISTER.SUCCESS(newUser));
      } catch (error) {
        res.status(501).json(response.auth.REGISTER.FAILURE(error));
      }
    }
  };

  //[POST] /auth/login
  login(req, res, next) {
    User.findOne({
      username: req.body.username
    })
      .then((user) => {
        if (user) {
          if (user.comparePassword(req.body.password))
            res.status(200).json({
              success: true,
              message: "Login sucessfully",
              data: {
                id: user._id,
                fullname: user.fullname,
                username: user.username,
                email: user.email,
                role: user.roles,
                accessToken: auth.authJwt.generateToken(user)
              }
            });
          else {
            res.status(200).json({
              success: false,
              message: "Wrong username or password",
              data: {}
            });
          }
        } else
          res.status(200).json({
            success: false,
            message: "User is not found",
            data: {}
          });
      })
      .catch((error) => {
        res.status(500).json({
          success: false,
          message: "Internal server error"
        });
        throw error;
      });
  }
}

module.exports = new AuthenticationController();
