const express =require('express');
const router = express.Router();

const RoleController = require('../controllers/RoleController.js');

router.get('/store',RoleController.index)
router.get('/:username',RoleController.show)
router.use('/',RoleController.create)


module.exports = router;
