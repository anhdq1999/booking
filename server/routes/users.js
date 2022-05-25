const express = require('express');
const router = express.Router();

const UserController = require('../controllers/UserController');

router.post('/create', UserController.create);
router.get('/store', UserController.index);
router.get('/garbage', UserController.garbage);
router.delete('/:id', UserController.delete);
router.post('/restore/:id', UserController.restore);
router.put('/:id', UserController.update);
router.get('/:username', UserController.show);
router.delete('/remove/:id', UserController.completeDelete);

module.exports = router;
