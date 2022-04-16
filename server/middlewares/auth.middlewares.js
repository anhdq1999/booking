const config = require('../config/auth.config');
const jwt = require('jsonwebtoken');
generateToken = (user) => {
    // Định nghĩa những thông tin của user mà bạn muốn lưu vào token ở đây
    const userData = {
      _id: user._id,
      name: user.fullName,
      email: user.email,
    }
    // Thực hiện ký và tạo token
    return jwt.sign(
        {data: userData},
       config.secret,
      {
        algorithm: 'HS256',
        expiresIn: config.tokenLife,
      });
  
}

verifyToken = (req, res, next) => {
  let token = req.headers["x-access-token"];
  if (!token) {
    return res.status(403).send({
      message: "No token provided!"
    });
  }
  jwt.verify(token, config.secret, (err, decoded) => {
    if (err) {
      return res.status(401).send({
        message: "Unauthorized!"
      });
    }
    req.userId = decoded.id;
    next();
  });
};
const authJwt = {
  generateToken,
  verifyToken,
};
module.exports = authJwt;
