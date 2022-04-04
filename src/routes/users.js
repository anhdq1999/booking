const express =require('express');
const router = express.Router();

const UserController = require('./../controllers/UserController.js');

router.use('/store',UserController.index)
router.use('/:username',UserController.show)
router.use('/',UserController.create)


module.exports = router;
