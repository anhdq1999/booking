const Order = require("../models/Orders");
const Orderdetails = require("../models/OrderDetail");
const { error } = require("lint-staged/lib/figures");


class OrderController {
  //[GET] /:id
  show(req, res, next) {
    const id = req.params.id;
    console.log(id);
    Order.findById({ _id: id })
      .then((room) =>
        res.status(200).json({
          action: "find room by id",
          success: true,
          message: "find successfully",
          data: room
        })
      )
      .catch((error) => {
        res.status(500).json({
          action: "find room by id",
          success: false,
          message: `Internal Server Error : ${error}`,
          data: null
        });
      });
  }

  // POST /
  create(req, res, next) {
    const oder = req.body;
    const newOrder = new Order(roomRequest);
    newOrder
      .save()
      .then(() => {
        res.status(200).json({
          action: "create room",
          success: true,
          message: "create room successfully",
          data: newOrder
        });
      })
      .catch((error) => {
        res.status(500).json({
          action: "create room",
          success: false,
          message: `Internal Server Error : ${error}`,
          data: null
        });
      });
  }

  // PUT /:id
  update(req, res, next) {
    const roomRequestId = req.params.id;
    const roomRequest = req.body;
    Order.findByIdAndUpdate(roomRequestId, roomRequest)
      .then((room) => {
        res.status(200).json({
          action: "update room",
          success: true,
          message: "update room successfully",
          data: room
        });
      })
      .catch((error) => {
        res.status(500).json({
          action: "create room",
          success: false,
          message: `Internal Server Error : ${error}`,
          data: null
        });
      });
  }

  // DELETE /:id
  delete(req, res, next) {
    const roomRequestId = req.params.id;
    Order.findByIdAndDelete(roomRequestId)
      .then((room) => {
        res.status(200).json({
          action: "delete room",
          success: true,
          message: "delete room successfully",
          data: room
        });
      })
      .catch((error) => {
        res.status(500).json({
          action: "create room",
          success: false,
          message: `Internal Server Error : ${error}`,
          data: null
        });
      });
  }

  store(req, res, next) {
    Order.find({})
      .then((rooms) => {
        res.status(200).json({
          action: "Get all room",
          success: true,
          message: "Get all room successfully",
          data: rooms
        });
      })
      .catch((error) => {
        res.status(500).json({
          action: "Get all room",
          success: false,
          message: `Internal Server Error : ${error}`,
          data: null
        });
      });
  }

  saveOder(req, res, next) {

      const { orderDetail } = data;
      const newOrderDetail = new Orderdetails(orderDetail);

      newOrderDetail.save()
        .then((order) => {
          res.status(200).json({
            action: "save order detail",
            success: true,
            message: "save order detail successfully",
            data: order
          });
        })
        .catch((error) => {
          res.status(500).json({
            action: "save order detail",
            success: false,
            message: `Internal Server Error : ${error}`,
            data: null
          });
        });
    };

}


module.exports = new OrderController();
