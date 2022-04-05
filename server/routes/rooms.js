const express = require("express");
const router = express.Router();


const RoomController = require("../controllers/RoomController");

router.get("/", RoomController.index);
router.post("/create", RoomController.create);
// router.get("/store", RoomController.index);
router.get("/:username", RoomController.show);

module.exports = router;


