const express = require('express');
const router = express.Router();

const OrderController = require('../controllers/OrderController');

router.post('/create', OrderController.create);

router.get('/store', OrderController.store);

router.get('/:id', OrderController.show);

router.put('/:id', OrderController.update);

router.delete('/:id', OrderController.delete);

router.delete('/remove/:id',OrderController.completeDelete)

router.post('/restore/:id',OrderController.restore)

router.get('/store/garbage', OrderController.garbage);

router.get('/order-detail/store', OrderController.showOrderDetail)

module.exports = router;
