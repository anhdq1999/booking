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
const getByCode = (req, res, next) => {
    const code = req.params.code
    District.find({ code })
        .then(
            district => res.status(200).json({
                action: "Get ward by district code",
                success: true,
                data: district
            }))
}
const DistrictController = {
    getByProvinceCode,
    getByCode
}
module.exports = DistrictController
