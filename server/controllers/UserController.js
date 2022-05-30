const User = require('../models/Users');
const bcrypt = require('bcrypt');
class UserController {
    //[GET] /users/:username
    show(req, res, next) {
        User.findOne({ username: req.params.username })
            .then((user) => res.json(user))
            .catch(next);
    }

    //[GET] /users/store
    index(req, res, next) {
        User.find({})
            .then((users) => 
            {   
                res.status(200).json(
                   {
                       action:"get _all_user",
                       success:true,
                       data:users
                   }
                )
            })
            .catch(next);
    }
    //[POST] /users/create
    create(req, res, next) {
        const formData = req.body;
        User.findOne({ username: req.body.username })
        .then((user) => {
            if (user)
                res.status(409).json(RES.USER.CREATE.FAILURE());
            else {
                const hash_password = bcrypt.hashSync(
                    req.body.password,
                    10,
                );
                req.body.hash_password = hash_password;
                const newUser = new User(formData);
                console.log(newUser);
                const isCreated = newUser.save().then( u =>{return u});
                console.log(isCreated);
                if (isCreated) {
                    res.status(200).json(RES.USER.CREATE.SUCCESS(newUser));
                } else {
                    res.status(400).json({
                        success: false,
                        message:
                            'Something is wrong when create a user, please try again',
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
    //[PUT] /users/:id
    update(req, res, next) {
        User.findOneAndUpdate({ _id: req.params.id }, req.body,{new:true})
            .then((user) =>
                res.status(200).json({
                    action: 'update user',
                    success: true,
                    message: 'update thanh cong',
                    data: user
                })
            )
            .catch(next);
    }
    //[DELETE] /users/:id/delete
    delete(req, res, next) {
        User.delete({ _id: req.params.id })
            .then(() =>
                res.status(200).json({
                    success: true,
                    message: 'Delete user successfully',
                }),
            )
            .catch(next);
    }
    //[GET] /users/garbage
    garbage(req, res, next) {
        User.findDeleted({})
            .then((users) => res.json(users))
            .catch(next);
    }
    //[PUT] /users/restore/:id
    restore(req, res, next) {
        User.restore({ _id: req.params.id }).then(() =>
            res.status(200).json({
                action: 'restore user',
                success: true,
                message: 'Restore user successful ',
            }),
        );
    }
    //[DELETE] /users/remove/:id
    completeDelete(req, res, next) {
        User.remove({ _id: req.params.id })
            .then(() =>
                res.status(200).json({
                    action: 'remove user',
                    success: true,
                    message: 'Remove user successful ',
                }),
            )
            .catch(next);
    }
}
module.exports = new UserController();
