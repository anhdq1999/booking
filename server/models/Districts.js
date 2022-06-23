const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const mongooseDelete = require('mongoose-delete');
const slug = require('mongoose-slug-generator');
const District = new Schema({
    name: {type: String, require: true},
    type: {type: String, require: true},
    slug: {type: String,slug:'name', require: true},
    name_with_type: {type: String, require: true},
    path: {type: String, require: true},
    path_with_type: {type: String, require: true},
    code: {type: String, require: true},
    parent_code: {type: String, require: true}
})
mongoose.plugin(slug);
District.plugin(mongooseDelete, {
    deleteAt: true,
    overrideMethods: true,
});
module.exports = mongoose.model('Districts', District);