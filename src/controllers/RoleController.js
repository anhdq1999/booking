const Role = require('./../models/Roles')
class RoleController{
    show(req,res,next){
        Role.findOne({username:req.params.slug})
        .then((role) =>
            res.json(role)
        ).catch(next)
    }
    
    index(req,res,next){
        Role.find({}).then((roles) => 
            res.json(roles)
        ).catch(next)
    }

    create(req,res,next){
        res.send('Create role')
    }

   
}
module.exports = new RoleController
