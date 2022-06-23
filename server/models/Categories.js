const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const mongooseDelete = require("mongoose-delete");
const slug = require("mongoose-slug-generator");
const Category = new Schema({
  name: { type: String, require: true },
  code: { type: String, slug: "name" }
});
mongoose.plugin(slug);
Category.plugin(mongooseDelete, {
  deleteAt: true,
  overrideMethods: true
});
module.exports = mongoose.model("Category", Category);