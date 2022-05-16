const express = require('express');
const router = express.Router();

const RoomController = require('../controllers/RoomController');

router.post('/create', RoomController.create);

router.get('/store', RoomController.store);

router.put('/:id', RoomController.update);

router.delete('/:id', RoomController.delete);

router.get('/:id', RoomController.show);

module.exports = router;
