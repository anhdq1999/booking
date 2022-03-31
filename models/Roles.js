const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const RolesModel = new Schema({
  roleName: {
    type: String,
    require: true
  },
  roleCode: {
    type: String,
    require: true,
    enum: ["host", "user", "admin"],
    default: "user"
  }
});
module.exports = mongoose.model("roles", RolesModel);