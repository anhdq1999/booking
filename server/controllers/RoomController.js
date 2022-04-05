const Room = require("../models/Rooms");

class RoomController {

  //[GET] /room/:roomId
  show(req, res, next) {
    const roomId = req.params.roomId;
    Room.findById({ roomId })
      .then((room) =>
        res.status(200).json({
          action: "find room by id",
          success: true,
          message: "find successfully",
          data: room
        })
      ).catch(() => {
      res.status(500).json({
        action: "find room by id",
        success: false,
        message: "Internal Server Error",
        data: null
      });
    });
  }

  // POST /create
  create(req, res, next) {
    const roomRequest = req.body;
    const newRoom = new Room(roomRequest);
    newRoom.save().then(() => {
      res.status(200).json({
        action: "create room",
        success: true,
        message: "create room successfully",
        data: newRoom
      });
    }).catch((error) => {
      console.log(error);
      res.status(500).json({
        action: "create room",
        success: false,
        message: "Internal Server Error",
        data: null
      });
    });
  }
  // PUT /room:roomId
  update(req, res, next) {

  }

  index(req, res, next) {
    res.send("hello ! this is rooms");
  }

}

module.exports = new RoomController;

