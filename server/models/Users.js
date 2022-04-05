
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
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
      unique: true,
      trim: true
    },
    phone: [{
      type: String,
      require: true,
      unique: true,
      trim: true
    }],
    fullName: {
      type: String,
      require: true,
      // unique: true,
      trim: true
    },
    address: {
      type: String,
      require: true
    },
    roles: {
      type: String,
      require: true,
      enum: ["host", "user", "admin"],
      default: "user"
    }
  }, {
    timestamps: true
  }
);

module.exports = mongoose.model("User", userSchema);

