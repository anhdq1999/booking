const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const mongooseDelete = require('mongoose-delete');
const slug = require('mongoose-slug-generator');

const Blog = new Schema(
    {
        mainTitle: { type: String, require: true },
        slug: { type: String, slug: 'mainTitle' },
        mainContent: { type: String, require: true },
        subContent: [
            {
                image: { type: String, require: true },
                content: { type: String, require: true }
            }
        ]
    },
    {
        timestamps: true
    }
)
mongoose.plugin(slug);
Blog.plugin(mongooseDelete, {
  deleteAt: true,
  overrideMethods: true,
});
// Room.plugin(slug_update);
module.exports = mongoose.model('Blog', Blog);
