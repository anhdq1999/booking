const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const User = new Schema({
    fullname:{type:String},
    username:{type:String},
    password:{type:String},
    address:{type:String},
    phoneNumber:{type:String,maxlength:11},
});
module.exports = mongoose.model('User',User)
