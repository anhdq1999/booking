const express = require('express');
const router = express.Router();
const DistrictController =require('../controllers/DistrictController')

router.get("/getByProvinceCode/:code", DistrictController.getByProvinceCode);

module.exports = router;
