const express = require('express');
const router = express.Router();
const CloudinaryController = require('../controllers/CloudinaryController')
const fileUploader = require('../config/cloudinary.config');

router.post('/image', fileUploader.single('file'), CloudinaryController.uploadFile)

router.post('/multi-images', fileUploader.array('file'), CloudinaryController.uploadMultiFile)

module.exports = router;
