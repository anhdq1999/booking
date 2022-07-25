const User = require('../models/Users');
const bcrypt = require('bcrypt');
const RES = require('../response');
<<<<<<< HEAD
const { user } = require("../_constants");
=======
>>>>>>> master
class UserController {
    //[GET] /users/:username
    show(req, res, next) {
        User.findOne({ _id: req.params.id })
            .then((user) => res.json(user))
            .catch(next);
    }

    //[GET] /users/store
    index(req, res, next) {
        User.find({})
<<<<<<< HEAD
            .then((users) => 
            {
                res.status(200).json(RES.User.GETALL.SUCCESS(users))
=======
            .then((users) => {
                res.status(200).json(RES.USER.GETALL.SUCCESS(users));
>>>>>>> master
            })
            .catch(next);
    }
    //[POST] /users/
    create(req, res, next) {
        const formData = req.body;
        User.findOne({ username: req.body.username })
<<<<<<< HEAD
        .then((user) => {
            if (user)
                res.status(409).json(RES.User.CREATE.FAILURE);
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
                    res.status(200).json(RES.User.CREATE.SUCCESS(newUser));
                } else {
                    res.status(400).json({
                        success: false,
                        message:
                            'Something is wrong when create a user, please try again',
                    });
=======
            .then((user) => {
                if (user) res.status(409).json(RES.USER.CREATE.FAILURE_EXIST());
                else {
                    const hash_password = bcrypt.hashSync(
                        req.body.password,
                        10,
                    );
                    req.body.hash_password = hash_password;
                    let newUser = new User(formData);
                    newUser = newUser
                        .save()
                        .then((u) => {
                            res.status(200).json(RES.USER.CREATE.SUCCESS(u));
                        })
                        .catch((err) =>
                            res.status(400).json(RES.USER.CREATE.FAILURE()),
                        );
>>>>>>> master
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
<<<<<<< HEAD
        User.findOneAndUpdate({ _id: req.params.id }, req.body,{new:true})
            .then((user) =>
                res.status(200).json(RES.User.UPDATE.SUCCESS(user))
            )
=======
        User.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
            .then((user) => res.status(200).json(RES.USER.UPDATE.SUCCESS(user)))
>>>>>>> master
            .catch(next);
    }
    //[DELETE] /users/:id/delete
    delete(req, res, next) {
        User.delete({ _id: req.params.id })
<<<<<<< HEAD
            .then(() =>
                res.status(200).json(RES.User.DELETE.SUCCESS()),
            )
=======
            .then(() => res.status(200).json(RES.USER.DELETE.SUCCESS()))
>>>>>>> master
            .catch(next);
    }
    //[GET] /users/garbage
    garbage(req, res, next) {
        User.findDeleted({})
            .then((users) =>
                res.status(200).json(RES.USER.GETALL_DELETED.SUCCESS(users))
            )
            .catch(next);
    }
    //[POST] /users/restore/:id
    restore(req, res, next) {
        User.restore({ _id: req.params.id }).then(() =>
<<<<<<< HEAD
            res.status(200).json(RES.User.RESTORE.SUCCESS(User)),
=======
            res.status(200).json(RES.USER.RESTORE.SUCCESS()),
>>>>>>> master
        );
    }
    //[DELETE] /users/remove/:id
    completeDelete(req, res, next) {
        User.remove({ _id: req.params.id })
<<<<<<< HEAD
            .then(() =>
                res.status(200).json(RES.User.REMOVE.SUCCESS()),
            )
=======
            .then(() => res.status(200).json(RES.USER.REMOVE.SUCCESS()))
>>>>>>> master
            .catch(next);
    }
}
module.exports = new UserController();
