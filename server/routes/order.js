const express = require('express');
const router = express.Router();

const OrderController = require('../controllers/OrderController');

router.post('/create', OrderController.saveOder);
// router.get('/store', OrderController.store);
// router.get('/garbage', OrderController.garbage);
// router.post('/restore/:id',OrderController.restore)
// router.delete('/:id', OrderController.delete);
// router.delete('/remove/:id',OrderController.completeDelete)
// router.put('/:id', OrderController.update);
// router.get('/:id', OrderController.show);

module.exports = router;