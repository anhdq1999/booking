const User = require('./../models/Users')
class UserController{
    show(req,res,next){
        User.findOne({username:req.params.username})
        .then((user) =>
            res.json(user)
        ).catch(next)
    }
    
    index(req,res,next){
        User.find({}).then((users) => 
            res.json(users)
        ).catch(next)
    }

    create(req,res,next){
        res.send('Create user')
    }

   
}
module.exports = new UserController
