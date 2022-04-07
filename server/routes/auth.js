const express = require('express');
const router = express.Router();

const authController = require('../controllers/AuthenticationController');

// @route: POST api/auth/register
// desc: register
// access: Public
router.post('/register', authController.register);
router.post('/login', authController.login);

module.exports = router;
