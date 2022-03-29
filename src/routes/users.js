const express =require('express');
const router = express.Router();

const UserController = require('./../controllers/UserController.js');

router.use('/store',UserController.show)

module.exports = router;
