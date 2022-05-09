const express = require('express');
const router = express.Router();

const UserController = require('../controllers/UserController');

router.post('/create', UserController.create);
router.get('/store', UserController.index);
router.get('/garbage', UserController.garbage);
router.delete('/:id/delete', UserController.delete);
router.put('/:id', UserController.update);
router.get('/:username', UserController.show);

module.exports = router;
