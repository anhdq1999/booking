const express =require('express');
const router = express.Router();

const UserController = require('../controllers/UserController.js');

router.get('/store',UserController.index)
router.post('/create',UserController.create)
router.get('/:username',UserController.show)


module.exports = router;
