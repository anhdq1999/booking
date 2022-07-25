const express = require('express');
const router = express.Router();

const OrderController = require('../controllers/OrderController');

router.post('/', OrderController.create);

router.get('/', OrderController.store);

router.get('/garbage/', OrderController.garbage);

router.get('/:id', OrderController.show);

router.put('/:id', OrderController.update);

router.delete('/', OrderController.deleteAll);

router.delete('/:id', OrderController.delete);

router.delete('/remove/', OrderController.removeAll);

router.delete('/remove/:id', OrderController.completeDelete);


router.post('/restore/:id', OrderController.restore);

module.exports = router;
