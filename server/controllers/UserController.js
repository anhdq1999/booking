const User = require('../models/Users');
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
            .then((users) => res.json(users))
            .catch(next);
    }
    //[POST] /users/create
    create(req, res, next) {
        const formData = req.body;
        const user = new User(formData);
        user.save()
            .then((user) =>
                res.status(200).json({
                    action: 'add user',
                    status: 'success',
                    data: [user],
                }),
            )
            .catch((err) =>
                res.status(400).json({
                    action: 'add user',
                    status: 'fail',
                    messsage: { err },
                }),
            );
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
                    message: 'Delete user succesful',
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
