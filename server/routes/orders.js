const express = require("express");
const router = express.Router();

const orderController = require("../controllers/OrderController");

router.post("/create", orderController.create);

router.get("/store", orderController.store);
//
// router.put("/:id", orderController.update);
//
// router.delete("/:id", orderController.delete);
//
// router.get("/:id", orderController.show);

module.exports = router;
