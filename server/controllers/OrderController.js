const Order = require("../models/Orders");
const OrderDetail = require("../models/OrderDetail");

class OrderController {

  // POST
  create(req, res, next) {
    const { orderDetails } = req.body;
    // res.json(orderDetails);
    orderDetails.forEach((ordersDetails) => {
      const newOrderDetails = new OrderDetail(ordersDetails);
      newOrderDetails.save();
    });
    res.json("success");
    // const orderRequest = req.body;
    // const newOrderDetails = new OrderDetail(orderDetails);
    // const newOrder = new Order(orderRequest);
    // console.log(newOrder);
    // newOrderDetails.save();
    // newOrder.save()
    // .then(() => {
    //   res.status(200).json({
    //     action: "create order",
    //     success: true,
    //     message: "create order successfully",
    //     data: newOrder
    //   });
    // })
    //   .catch((error) => {
    //     res.status(500).json({
    //       action: "create order",
    //       success: false,
    //       message: `Internal Server Error : ${error}`,
    //       data: null
    //     });
    //   });

  }

  //[GET] /
  // get all order
  store(req, res, next) {
    Order.find({})
      .then((orders) => {
        res.status(200).json({
          action: "Get all orders",
          success: true,
          message: "Get all orders successfully",
          data: orders
        });
      })
      .catch((error) => {
        res.status(500).json({
          action: "Get all orders",
          success: false,
          message: `Internal Server Error : ${error}`,
          data: null
        });
      });
  }

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


}

module.exports = new OrderController();
