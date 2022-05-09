const Room = require("../models/Rooms");

class RoomController {
//[GET] /:roomId
  show(req, res, next) {
    const roomId = req.params.roomId;
    console.log(roomId);
    Room.findById({ _id: roomId })
      .then((room) => res.status(200).json({
        action: "find room by id", success: true, message: "find successfully", data: room
      })).catch((error) => {
      res.status(500).json({
        action: "find room by id", success: false, message: `Internal Server Error : ${error}`, data: null
      });
    });
  }

// POST /
  create(req, res, next) {
    const roomRequest = req.body;
    const newRoom = new Room(roomRequest);
    newRoom.save().then(() => {
      res.status(200).json({
        action: "create room", success: true, message: "create room successfully", data: newRoom
      });
    }).catch((error) => {
      res.status(500).json({
        action: "create room", success: false, message: `Internal Server Error : ${error}`, data: null
      });
    });
  }

// PUT /:roomId
  update(req, res, next) {
    const roomRequestId = req.params.roomId;
    const roomRequest = req.body;
    Room.findByIdAndUpdate(roomRequestId, roomRequest)
      .then((room) => {
        res.status(200).json({
          action: "update room", success: true, message: "update room successfully", data: room
        });
      }).catch((error) => {
      res.status(500).json({
        action: "create room", success: false, message: `Internal Server Error : ${error}`, data: null
      });
    });
  }

// DELETE /:roomId
  delete(req, res, next) {
    const roomRequestId = req.params.roomId;
    Room.findByIdAndDelete(roomRequestId).then((room) => {
      res.status(200).json({
        action: "delete room", success: true, message: "delete room successfully", data: room
      });
    }).catch((error) => {
      res.status(500).json({
        action: "create room", success: false, message: `Internal Server Error : ${error}`, data: null
      });
    });
  }

  store(req, res, next) {
    Room.find({}).then((rooms) => {
      res.status(200).json({
        action: "Get all room", success: true, message: "Get all room successfully", data: rooms
      });
    }).catch(error => {
      res.status(500).json({
        action: "Get all room", success: false, message: `Internal Server Error : ${error}`, data: null
      });
    });
  }

}

module.exports = new RoomController;
