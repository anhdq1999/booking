const District = require('../models/Districts');

const getByProvinceCode = (req, res, next) => {
    const parent_code = req.params.code;
    District.find({ parent_code })
        .then(districts => res.status(200).json({
            action: "Get district by province code",
            success: true,
            data: districts
        }))
}

const DistrictController = {
    getByProvinceCode
}
module.exports = DistrictController
