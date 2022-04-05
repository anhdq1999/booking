const express =require('express');
const router = express.Router();

const UserController = require('../controllers/UserController.js');

router.post('/create',UserController.create)
router.get('/store',UserController.index)
router.delete('/:id/delete',UserController.delete);
router.put('/:id',UserController.update);
router.get('/:username',UserController.show)



module.exports = router;
