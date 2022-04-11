const User = require('../models/Users');
const bcrypt =require('bcrypt');
const jwt =require('jsonwebtoken');

class AuthenticationController {
    register(req, res, next) {
        User.findOne({ username: req.body.username })
            .then((user) => {
                if (user)
                    res.status(409).json({
                        success: false,
                        message: 'User is existed',
                    });
                else {
                    const hash_password = bcrypt.hashSync(req.body.password,10);
                    req.body.hash_password =hash_password;
                    const newUser = new User(req.body);
                    const isCreated = newUser.save();
                    if(isCreated) 
                        res.status(200).json({
                        success: true,
                        message: 'User created successfully',
                        data: { 
                            username:newUser.username
                        }
                    });
                    else {
                        res.status(400).json({
                            success: false,
                            message: 'Something is wrong when create a user, please try again',
                        });
                    }
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
        })
            .then((user) => {
                if (user){
                    if(user.comparePassword(req.body.password)) res.status(200).json({
                        sucess: true,
                        message: 'Login sucessfully',
                        data:{
                            token: jwt.sign({ email: user.email, fullName: user.fullName, _id: user._id}, 'RESTFULAPIs')
                        }
    
                    });
                    else{
                        res.status(401).json({
                            sucess: false,
                            message: 'Wrong username or password',
                            data: {},
                        }); 
                    }
                }
                else
                    res.status(401).json({
                        sucess: false,
                        message: 'User is not found',
                        data: {},
                    });
            })
            .catch((error) => {
                res.status(500).json({
                    sucess: false,
                    message: 'Internal server error',
                });
                throw error;

            });
    }
}
module.exports = new AuthenticationController();
