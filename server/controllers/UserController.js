const User = require('../models/Users')
class UserController{
    //[GET] /users/:username
    show(req,res,next){
        User.findOne({username:req.params.username})
        .then((user) =>
            res.json(user)
        ).catch(next)
    }

    //[GET] /users/store
    index(req,res,next){
        User.find({}).then((users) => 
            res.json(users)
        ).catch(next)
    }
    //[POST] /users/create
    create(req,res,next){
        const formData =req.body;
        const user = new User(formData);
        user.save().then(
            user => res.status(200).json(user)
        ).catch(err=>
            res.status(400).json("error")
        )
    } 
}
module.exports = new UserController
