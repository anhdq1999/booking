const express = require("express");
const router = express.Router();

const RoomController = require("../controllers/RoomController");

router.post("/", RoomController.create);
router.get("/", RoomController.store);
router.get("/groupByProvince", RoomController.groupByProvince);
router.get("/garbage", RoomController.garbage);
router.get("/host/:hostId", RoomController.getByUserId);
router.get("/:id", RoomController.show);
router.get("/getByProvince/:province", RoomController.getByProvince);
router.post("/restore/:id", RoomController.restore);
router.delete("/:id", RoomController.delete);
router.delete("/remove/:id", RoomController.completeDelete);
router.put("/:id", RoomController.update);

module.exports = router;
