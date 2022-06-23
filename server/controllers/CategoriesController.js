const Categories = require("../models/Categories");

class CategoriesController {
  store(req, res, next) {
    Categories.find({})
      .then((categories) => {
        res.status(200).json({
          action: "GET all categories",
          success: true,
          message: "GET all categories successfully",
          data: categories
        });
      })
      .catch((error) => {
        res.status(500).json({
          action: "GET all categories",
          success: false,
          message: `GET all categories failed : ${error}`,
          data: null
        });
      });
  }

  show(req, res) {
    const _id = req.params.id;
    Categories.findById({ _id })
      .then((categories) => {
        res.status(200).json({
          action: "find categories by id",
          success: true,
          message: `find categories by id successfully`,
          data: categories
        });
      })
      .catch((error) => {
        res.status(500).json({
          action: "find categories by id",
          success: false,
          message: `Internal Server Error : ${error}`,
          data: null
        });
      });
  }

  create(req, res, next) {
    const categoriesRequest = req.body;
    const newCategories = new Categories(categoriesRequest);
    newCategories
      .save({ new: true })
      .then((categories) => {
        res.status(200).json({
          action: "create categories",
          success: true,
          message: "create categories successfully",
          data: categories
        });
      })
      .catch((error) => {
        res.status(500).json({
          action: "create categories",
          success: false,
          message: `create categories error : ${error}`,
          data: null
        });
      });
  }

  update(req, res, next) {
    const _id = req.params.id;
    const categoriesRequest = req.body;
    Categories.findOneAndUpdate({ _id }, categoriesRequest, { new: true })
      .then((categories) => {
        res.status(200).json({
          action: "create categories",
          success: true,
          message: "create categories successfully",
          data: categories
        });
      })
      .catch((error) => {
        res.status(500).json({
          action: "create categories",
          success: false,
          message: `create categories error : ${error}`,
          data: null
        });
      });
  }

  garbage(req, res, next) {
    Categories.findDeleted({})
      .then((categories) => {
        res.status(200).json({
          action: "get all categories from garbage",
          success: true,
          message: "get all categories from garbage successfully",
          data: categories
        });
      })
      .catch((error) => {
        res.status(200).json({
          action: `get all categories from garbage`,
          success: true,
          message: `Internal Server Error : ${error}`,
          data: null
        });
      });
  }

  delete(req, res, next) {
    const _id = req.params.id;
    Categories.delete({ _id })
      .then((categories) => {
        res.status(200).json({
          action: "delete categories by id",
          success: true,
          message: `delete categories by id successfully`,
          data: categories
        });
      })
      .catch((error) => {
        res.status(500).json({
          action: "delete categories by id",
          success: false,
          message: `Internal Server Error : ${error}`,
          data: null
        });
      });
  }

  completeDelete(req, res, next) {
    const _id = req.params.id;
    Categories.remove({ _id })
      .then((categories) => {
        res.status(200).json({
          action: "remove categories by id",
          success: true,
          message: `remove categories by id successfully`,
          data: categories
        });
      })
      .catch((error) => {
        res.status(500).json({
          action: "remove categories by id",
          success: false,
          message: `Internal Server Error : ${error}`,
          data: null
        });
      });
  }

  restore(req, res, next) {
    const _id = req.params.id;
    Categories.restore({ _id })
      .then((categories) => {
        res.status(200).json({
          action: "restore categories by id",
          success: true,
          message: `restore categories by id successfully`,
          data: categories
        });
      })
      .catch((error) => {
        res.status(500).json({
          action: "restore categories by id",
          success: false,
          message: `restore Server Error : ${error}`,
          data: null
        });
      });
  }


}

module.exports = new CategoriesController();