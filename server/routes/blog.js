const express = require('express');
const router = express.Router();

const BlogController = require('../controllers/BlogController');

router.get('/',BlogController.getAll)
router.get('/:id',BlogController.getById)
router.post('/',BlogController.create)
router.put('/:id',BlogController.update)
router.delete('/:id',BlogController._delete)

module.exports = router
