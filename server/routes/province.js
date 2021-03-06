const express = require('express');
const router = express.Router();
const ProvinceController = require('../controllers/ProvinceController');

router.get("/", ProvinceController.getAll);
router.get("/:code", ProvinceController.getByCode);

module.exports = router;