const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const mongooseDelete = require("mongoose-delete");
const bcrypt = require("bcrypt");
const User = new Schema({
  username: {
    type: String, require: true, unique: true, trim: true
  },
  hash_password: {
    type: String, require: true, trim: true
  },
  email: {
    type: String, require: true,
    trim: true
  },
  dateOfBirth: {
    type: Date, require: true
  },
  sex: {
    type: String, require: true
  },
  phoneNumber: {
    type: String, require: true,
    trim: true
  },
  fullName: {
    type: String, require: true,
    trim: true
  },
  address: {
    type: String, require: true
  },
  roles: {
    type: String, require: true, enum: ["host", "user", "admin"], default: "user"
  },
  isVerify: {
    type: Boolean, require: true, default: false
  },
  resetLink: {
    type: String, default: null
  },
  verifyLink:{
    type: String, default : null
  }
}, {
  timestamps: true
});
User.plugin(mongooseDelete, {
  deleteAt: true, overrideMethods: true
});
User.methods.comparePassword = function(password) {
  return bcrypt.compareSync(password, this.hash_password);
};

module.exports = mongoose.model("User", User);
