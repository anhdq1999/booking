const Province = require('../models/Provinces');

const getAll = (req, res, next) => {
    Province.find({})
        .then(provinces => res.status(200).json({
            action: "Get all provinces",
            success: true,
            data: provinces
        }))
}

const ProvinceController = {
    getAll,

}

module.exports = ProvinceController
