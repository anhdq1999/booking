const User = require('../models/Users');
const bcrypt = require('bcrypt');
const RES = require('../response');
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
            .then((users) => {
                res.status(200).json(RES.USER.GETALL.SUCCESS(users));
            })
            .catch(next);
    }
    //[POST] /users/
    create(req, res, next) {
        const formData = req.body;
        User.findOne({ username: req.body.username })
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
        User.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
            .then((user) => res.status(200).json(RES.USER.UPDATE.SUCCESS(user)))
            .catch(next);
    }
    //[DELETE] /users/:id/delete
    delete(req, res, next) {
        User.delete({ _id: req.params.id })
            .then(() => res.status(200).json(RES.USER.DELETE.SUCCESS()))
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
    //[PUT] /users/restore/:id
    restore(req, res, next) {
        User.restore({ _id: req.params.id }).then(() =>
            res.status(200).json(RES.USER.RESTORE.SUCCESS()),
        );
    }
    //[DELETE] /users/remove/:id
    completeDelete(req, res, next) {
        User.remove({ _id: req.params.id })
            .then(() => res.status(200).json(RES.USER.REMOVE.SUCCESS()))
            .catch(next);
    }
}
module.exports = new UserController();
