const Room = require("../models/Room");

class RoomController {
  //[GET] /room/:roomid
  show(req, res, next) {
    const roomId = req.params.id;
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
        success: false,
        message: "Internal Server Error"
      });
    });
  }

  // POST
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
    }).catch(() => {
    });

  }

  index(req, res, next) {
    res.send("hello ! this is rooms");
  }

}

module.exports = new RoomController;
