const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const reviewSchema = new Schema({
    name: { type: String, require: true },
    comment: { type: String, require: true },
    rating: { type: Number, require: true }
  },
  {
    timestamps: true
  }
);
const constraint = new Schema({
  numGuest: { type: Number, require: true }

});
const addressDetails = new Schema({
  country: { type: Number, require: true },
  province: { type: String, require: true },
  district: { type: String, require: true },
  ward: { type: String, require: true },
  street: { type: String, require: true },
  googleAddress: { type: String, require: true }
});
const roomSchema = new Schema({
    name: { type: String, require: true },
    host: { type: mongoose.Schema.Types.ObjectId, ref: "users" },
    category: { type: String, require: true },
    // constraint: {},
    shortDescription: { type: String, require: true },
    description: { type: String, require: true },
    image: { type: String, require: true },
    images: [String],
    price: { type: Number, require: true },
    rating: { type: Number, require: true },
    numReviews: { type: Number, require: true },
    reviews: [reviewSchema],
    address: addressDetails,
    status: { type: Boolean, require: true }
  },
  {
    timestamps: true
  }
);
module.exports = mongoose.model("Room", roomSchema);