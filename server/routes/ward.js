const express = require('express');
const router = express.Router();
const WardController =require('../controllers/WardController')

router.get("/getByDistrictCode/:code", WardController.getByDistrictCode);
router.get("/", WardController.getAll);

module.exports = router;
