const express = require("express");
const router = express.Router();

const authController = require("../controllers/AuthenticationController");

// @route: POST api/auth/register
// desc: register
// access: Public
router.post("/register", authController.register);
router.post("/change-password", authController.changePassword);
router.post("/login", authController.login);
router.post("/register-verify", authController.verify);
router.post("/forgot", authController.forgotPassword);
router.post("/forgot-active", authController.resetPassword);


module.exports = router;
