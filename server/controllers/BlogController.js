const Blog = require('../models/Blog');
const RES = require('../response/index')

// [GET] /blogs
const getAll = (req, res, next) => {
    Blog.find({}).then(
        blogs => res.status(200).json(RES.BLOG.GETALL.SUCCESS(blogs))

    ).catch(next)
}
//[POST] /blogs
const create = (req, res, next) => {
    const formData = req.body;
    const blog = new Blog(formData)
    blog.save().then(
        blog => res.status(200).json(RES.BLOG.CREATE.SUCCESS(blog))
    ).catch(next)
}

//[PUT] /blogs/:id
const update = (req, res, next) => {
    Blog.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
        .then(blog => {
            res.status(200).json(RES.BLOG.UPDATE.SUCCESS(blog))
        }).catch(next)
}
//[DELETE] /blogs/:id
const _delete = (req, res, next) => {
    Blog.delete({ _id: req.params.id })
        .then(() => res.status(200).json(RES.BLOG.DELETE.SUCCESS()))
        .catch(next);
}
//GET /blogs/:id
const getById = (req, res, next) => {
    Blog.findOne({ _id: req.params.id })
        .then(blog => {
            res.status(200).json(RES.BLOG.GETBYID.SUCCESS(blog))
        }).catch(next);
}
const BlogController = {
    getAll,
    create,
    update,
    _delete,
    getById,
}
module.exports = BlogController;

