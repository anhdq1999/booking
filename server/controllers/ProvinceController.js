const Province = require('../models/Provinces');

const getAll = (req, res, next) => {
    Province.find({})
        .then(provinces => res.status(200).json({
            action: "Get all provinces",
            success: true,
            data: provinces
        }))
}
const getByCode = (req, res, next) => {
    const code = req.params.code
    Province.find({ code })
        .then(
            province => res.status(200).json({
                action: "Get ward by district code",
                success: true,
                data: province
            }))
}
const ProvinceController = {
    getAll,
    getByCode,
}

module.exports = ProvinceController
