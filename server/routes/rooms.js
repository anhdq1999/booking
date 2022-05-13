const express = require('express');
const router = express.Router();

const RoomController = require('../controllers/RoomController');

router.post('/create', RoomController.create);

router.get('/store', RoomController.store);
console.log(RoomController.store)

router.put('/:roomId', RoomController.update);

router.delete('/:roomId', RoomController.delete);

router.get('/:roomId', RoomController.show);

module.exports = router;
