const express = require('express');
const router = express.Router();

const RoomController = require('../controllers/RoomController');

router.post('/create', RoomController.create);

router.get('/store', RoomController.store);

<<<<<<< HEAD
router.get('/garbage', RoomController.garbage);
router.post('/restore/:id',RoomController.restore)
router.delete('/:id', RoomController.delete);

router.put('/:id', RoomController.update);
=======
router.put('/:id', RoomController.update);

router.delete('/:id', RoomController.delete);
>>>>>>> master

router.get('/:id', RoomController.show);

module.exports = router;
