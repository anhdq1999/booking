const mongoose = require("mongoose");
const Schema = mongoose.Schema();

const UsersModel = new Schema({
  username: {
    type: String,
    require: true,
    unique: true,
    trim: true
  },
  password: {
    type: String,
    require: true,
    trim: true
  },
  email: {
    type: String,
    require: true,
    // unique: true,
    trim: true
  },
  phone: {
    type: String,
    require: true,
    // unique: true,
    trim: true
  },
  fullName: {
    type: String,
    require: true,
    unique: true,
    trim: true
  }
});
module.exports = mongoose.model("users", UsersModel);

