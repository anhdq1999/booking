const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const mongooseDelete = require('mongoose-delete');
const slug = require('mongoose-slug-generator');
const Province = new Schema({
    name: { type: String, required: true },
    slug: { type: String, slug: 'name', required: true },
    type: { type: String, require: true },
    name_with_type: { type: String, require: true },
    code: { type: String, require: true }
})
mongoose.plugin(slug);
Province.plugin(mongooseDelete, {
    deleteAt: true,
    overrideMethods: true,
});
module.exports = mongoose.model('Provinces', Province);