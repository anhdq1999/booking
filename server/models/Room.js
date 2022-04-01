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
const roomSchema = new Schema({
    name: { type: String, require: true },
    category: { type: String, require: true },
    shortDescription: { type: String, require: true },
    description: { type: String, require: true },
    image: { type: String, require: true },
    images: [String],
    price: { type: Number, require: true },
    rating: { type: Number, require: true },
    numReviews: { type: Number, require: true },
    reviews: [reviewSchema],
    address: {}
  },
  {
    timestamps: true
  }
);
module.exports =mongoose.model('rooms', roomSchema)