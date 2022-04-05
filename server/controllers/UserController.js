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
        user.save()
        .then(user =>
            res.status(200).json({
                action:"add user",
                status:"success",
                data : [user]
            }))
        .catch(err=>
            res.status(400).json({
                action:"add user",
                status:"fail",
                messsage: {err}
        }))
    }
    //[PUT] /users/:id
    update(req,res,next){
        User.updateOne({_id:req.params.id},req.body)
            .then(()=>res.send('update thanh cong'))
            .catch(next)
    }
    //[DELETE] /users/:id/delete
    delete(req,res,next){
        User.delete({_id:req.params.id})
            .then(()=>res.status(200).json({status:"success"}))
            .catch(next)
    }
}
module.exports = new UserController
