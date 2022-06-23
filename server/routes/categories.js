const express = require("express");
const router = express.Router();


const CategoriesController = require("../controllers/CategoriesController");

router.post("/", CategoriesController.create);
router.get("/", CategoriesController.store);

router.get("/garbage", CategoriesController.garbage);
router.get("/:id", CategoriesController.show);

router.put("/:id", CategoriesController.update);

router.post("/restore/:id", CategoriesController.restore);
router.delete("/:id", CategoriesController.delete);
router.delete("/remove/:id", CategoriesController.completeDelete);

module.exports = router;
