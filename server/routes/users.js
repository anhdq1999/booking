const express =require('express');
const router = express.Router();

const UserController = require('../controllers/UserController.js');

router.post('/create',UserController.create)
router.get('/store',UserController.index)
router.get('/:username',UserController.show)


module.exports = router;
