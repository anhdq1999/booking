const User = require('../models/Users');

class AuthenticationController {
    register(req, res, next) {
        const formData = req.body;
        const user = new User(formData);
        User.findOne({ username: user.username })
            .then((user) => {
                if (user)
                    res.status(400).json({
                        success: false,
                        message: 'User is existed',
                    });
                else {
                    const newUser = new User(req.body);
                    newUser.save();
                    res.status(200).json({
                        success: true,
                        message: 'User created successfully',
                    });
                }
            })
            .catch((next) => {
                console.log(next);
                res.status(500).json({
                    success: false,
                    message: 'Internal server error',
                });
            });
    }
    login(req, res, next) {
        User.findOne({
            username: req.body.username,
            password: req.body.password,
        })
            .then((user) => {
                if (user)
                    res.status(200).json({
                        status: 'sucess',
                        message: 'Login sucessfully',
                        data: user,
                    });
                else
                    res.status(200).json({
                        status: 'failure',
                        message: 'Wrong username and password',
                        data: {},
                    });
            })
            .catch((next) => {
                console.log(next);
                res.status(500).json({
                    status: 'failure',
                    message: 'Internal server error',
                });
            });
    }
}
module.exports = new AuthenticationController();
