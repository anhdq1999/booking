const Order = require("../models/Orders");
const OrderDetail = require("../models/OrderDetail");

class OrderController {

  show(req, res, next) {
    const _id = req.params.id;
    Order
      .findById({ _id })
      .then((order) => {
        res.status(200)
          .json({
            action: "find order by id",
            success: true,
            message: `find order by id successfully`,
            data: order
          });
      })
      .catch(error => {
        res.status(500)
          .json({
            action: "find order by id",
            success: false,
            message: `Internal Server Error : ${error}`,
            data: null
          });
      });
  }

  store(req, res) {
    Order.find({})
      .then((orders) => {
          res.status(200)
            .json({
              action: "GET all order",
              success: true,
              message: "GET all order successfully",
              data: orders
            });
        }
      ).catch((error) => {
      res.status(500)
        .json({
          action: "GET all order",
          success: false,
          message: `GET all order failed : ${error}`,
          data: null
        });
    });
  }

  create(req, res, next) {
    const { orderDetails } = req.body;
    let isSuccessSave = false;
    orderDetails.forEach((order) => {
      const newOrderDetail = new OrderDetail(order);
      newOrderDetail.save();
      isSuccessSave = true;
    });
    const order = req.body;
    const newOrder = new Order(order);
    newOrder.save()
      .then((order) => {
        if (isSuccessSave) {
          res.status(200).json({
            action: "create order",
            success: true,
            message: "create order successfully",
            data: order
          });
        } else {
          res.status(500).json({
            action: "create order",
            success: false,
            message: "create OrderDetail error",
            data: order
          });
        }
      })
      .catch(error => {
        res.status(500).json({
          action: "create order",
          success: false,
          message: `create order error : ${error}`,
          data: null
        });
      });

  }

  update(req, res, next) {
    // const _id = req.params.id;
    //
    // const orderRequest = req.body;
    // let listOrderDetails;
    // let isFindOrderDetails = false;
    // Order
    //   .findById({ _id })
    //   .then((order) => {
    //     listOrderDetails = order;
    //     res.status(200)
    //       .json({
    //         action: "find order by id",
    //         success: true,
    //         message: `find order by id successfully`,
    //         data: order
    //       });
    //   })
    //   .catch(error => {
    //     res.status(500)
    //       .json({
    //         action: "find order by id",
    //         success: false,
    //         message: `Internal Server Error : ${error}`,
    //         data: null
    //       });
    //   });
    //
    // console.log({ listOrderDetails, isFindOrderDetails });

  }

  garbage(req, res, next) {
    Order
      .findDeleted({})
      .then(orders => {
        res.status(200)
          .json({
            action: "get all orders from garbage",
            success: true,
            message: "get all orders from garbage successfully",
            data: orders
          });
      })
      .catch(error => {
        res.status(200)
          .json({
            action: `get all orders from garbage`,
            success: true,
            message: `Internal Server Error : ${error}`,
            data: null
          });
      });
  }

  delete(req, res, next) {
    const _id = req.params.id;
    Order
      .delete({ _id })
      .then((order) => {
        res.status(200)
          .json({
            action: "delete order by id",
            success: true,
            message: `delete order by id successfully`,
            data: order
          });
      })
      .catch(error => {
        res.status(500)
          .json({
            action: "delete order by id",
            success: false,
            message: `Internal Server Error : ${error}`,
            data: null
          });
      });
  }

  completeDelete(req, res, next) {
    const _id = req.params.id;
    Order
      .remove({ _id })
      .then((order) => {
        res.status(200)
          .json({
            action: "remove order by id",
            success: true,
            message: `remove order by id successfully`,
            data: order
          });
      })
      .catch(error => {
        res.status(500)
          .json({
            action: "remove order by id",
            success: false,
            message: `Internal Server Error : ${error}`,
            data: null
          });
      });
  }

  restore(req, res, next) {
    const _id = req.params.id;
    Order
      .restore({ _id })
      .then((order) => {
        res.status(200)
          .json({
            action: "restore order by id",
            success: true,
            message: `restore order by id successfully`,
            data: order
          });
      })
      .catch(error => {
        res.status(500)
          .json({
            action: "restore order by id",
            success: false,
            message: `restore Server Error : ${error}`,
            data: null
          });
      });
  }

//
  showOrderDetail(req, res, next) {
    OrderDetail
      .find({})
      .then((orderDetails) => {
        res.status(200)
          .json({
            action: "get all order detail",
            success: true,
            message: `get all order detail successfully`,
            data: orderDetails
          });
      })
      .catch(error => {
        res.status(500)
          .json({
            action: "get all order detail",
            success: true,
            message: `Internal Server Error : ${error}`,
            data: null
          });
      });
  }

}


module.exports = new OrderController();
