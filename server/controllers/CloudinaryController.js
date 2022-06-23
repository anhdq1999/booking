const fileUploader = require('../config/cloudinary.config');
const fs = require('fs');

class CloudinaryController {
    uploadFile(req, res, next) {
        if (!req.file) {
            next(new Error('No file uploaded!'));
            return;
        }
        res.status(200).json({
            action: "Upload single image",
            success: true,
            data: req.file.filename
        })
    }
    uploadMultiFile(req, res, next) {
        if (!req.files) {
            next(new Error('No file uploaded!'));
            return;
        }
        const urls = []
        req.files.forEach(file => urls.push(file.filename))
        res.status(200).json({
            action: "Upload multi image",
            success: true,
            data: urls
        });
    }
}

module.exports = new CloudinaryController();