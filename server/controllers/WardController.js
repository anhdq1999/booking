const Ward = require('../models/Wards');
const data = require('../data/ward.json')

const getByDistrictCode = (req, res, next) => {
    const parent_code = req.params.code;
    Ward.find({ parent_code })
        .then(wards => res.status(200).json({
            action: "Get ward by district code",
            success: true,
            data: wards
        }))
}

const getAll = (req, res, next) => {
    Ward.find({})
        .then(data => res.status(200).json(data))
}

const getByCode = (req, res, next) => {
    const code = req.params.code
    Ward.find({ code })
        .then(
            ward => res.status(200).json({
                action: "Get ward by district code",
                success: true,
                data: ward
            }))
}
const WardController = {
    getByDistrictCode,
    getByCode,
    getAll
}
module.exports = WardController