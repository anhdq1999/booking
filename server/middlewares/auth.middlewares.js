const config = require('../config/auth.config');
const jwt = require('jsonwebtoken');
const User = require('../models/Users');

generateToken = (user) => {
    // Định nghĩa những thông tin của user mà bạn muốn lưu vào token ở đây
    const userData = {
        _id: user._id,
        name: user.fullName,
        email: user.email,
    };
    // Thực hiện ký và tạo token
    return jwt.sign({ data: userData }, config.secret, {
        algorithm: 'HS256',
        expiresIn: config.tokenLife,
    });
};

verifyToken = (req, res, next) => {
    let token = req.headers['x-access-token'];
    
    if (!token) {
        return res.status(403).send({
            message: 'No token provided!',
        });
    }
    jwt.verify(token, config.secret, (err, decoded) => {
        if (err) {
            return res.status(401).send({
                message: 'Unauthorized!',
            });
        }
        req.userId = decoded.data._id;
        next();
    });
};
isAdmin = (req, res, next) => {
    User.findById({ _id: req.userId }).then(user => {
        if (user.roles === 'admin') {
            next();
            return;
        } else {
            res.status(403).send({
                message: "Require Admin Role!"
            });
            return;
        }
    });
};
isUserRole = (req, res, next) => {
    User.findById({ _id: req.userId }).then(user => {
        if (user.roles === 'user') {
            next();
            return;
        } else {
            res.status(403).send({
                message: "Require User Role!"
            });
            return;
        }
    });
};
isHost = (req, res, next) => {
    User.findById({ _id: req.userId }).then(user => {
        if (user.roles === 'host') {
            next();
            return;
        } else {
            res.status(403).send({
                message: "Require Host Role!"
            });
            return;
        }
    });
};

const authJwt = {
    generateToken,
    verifyToken,
    isAdmin,
    isUserRole,
    isHost
};
module.exports = authJwt;
