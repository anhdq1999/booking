const express =require('express');
const router = express.Router();

const RoleController = require('./../controllers/RoleController.js');

router.use('/store',RoleController.index)
router.use('/:username',RoleController.show)
router.use('/',RoleController.create)


module.exports = router;
