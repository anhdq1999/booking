const express = require('express');
const router = express.Router();
const DistrictController =require('../controllers/DistrictController')

router.get("/getByProvinceCode/:code", DistrictController.getByProvinceCode);
router.get("/:code", DistrictController.getByCode);

module.exports = router;
