const User = require('./../models/Users')
class UserController{
    show(res,req,next){
        User.find({},(err,users)=>{     if(!err) res.json(users)
        else res.status(400).json(err)}
        )
    }

}
module.exports = new UserController