const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const mongooseDelete = require('mongoose-delete');
const slug = require('mongoose-slug-generator');
const slug_update = require('mongoose-slug-updater');

const reviewSchema = new Schema(
  {
    name: { type: String, require: true },
    comment: { type: String, require: true },
    rating: { type: Number, require: true },
  },
  {
    timestamps: true,
  },
);

const addressDetails = new Schema({
  country: { type: String, require: true },
  province: { type: String, require: true },
  district: { type: String, require: true },
  ward: { type: String, require: true },
  street: { type: String, require: true },
  googleAddress: { type: String, require: true },
});
const Room = new Schema(
  {
    name: { type: String, require: true },
    slug: {
      type: String,
      slug: 'name',
    },
    host: { type: mongoose.Schema.Types.ObjectId, ref: 'users' },
    category: { type: String, require: true },
    shortDescription: { type: String, require: true },
    description: { type: String, require: true },
    image: { type: String, require: true },
    images: [String],
    price: { type: Number, require: true },
    rating: { type: Number, require: true, default: 0 },
    numReviews: { type: Number, require: true, default: 0 },
    reviews: [reviewSchema],
    address: addressDetails,
    status: { type: Boolean, require: true, default: false },
  },
  {
    timestamps: true,
  },
);
mongoose.plugin(slug);
mongoose.plugin(slug_update);
Room.plugin(mongooseDelete, {
  deleteAt: true,
  overrideMethods: true,
});
// Room.plugin(slug_update);
module.exports = mongoose.model('Room', Room);
