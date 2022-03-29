const User = require('./../models/Users')
class UserController{
    show(req,res,next){
        User.find({}).then((users) => 
            res.json(users)
        ).catch(next)
        
    }

}
module.exports = new UserController
