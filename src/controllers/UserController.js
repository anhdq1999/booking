const User = require('./../models/Users')
class UserController{
    show(req,res,next){
        User.find({},function(err,users){
            if(!err) res.json(users)
            else res.status(400).json(err)}
        )
        
    }

}
module.exports = new UserController