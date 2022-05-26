const express = require('express');
const router = express.Router();

const UserController = require('../controllers/UserController');

router.post('/', UserController.create);
router.get('/', UserController.index);
router.get('/garbage', UserController.garbage);
router.delete('/:id', UserController.delete);
router.post('/restore/:id', UserController.restore);
router.put('/:id', UserController.update);
router.get('/:id', UserController.show);
router.delete('/remove/:id', UserController.completeDelete);

module.exports = router;
