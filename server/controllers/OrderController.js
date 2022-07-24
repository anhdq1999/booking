const Order = require("../models/Orders");
const User = require("../models/Users");
const Room = require("../models/Rooms");
const OrderDetail = require("../models/OrderDetail");
const Mail = require("../mail/SendMail");
const response = require("../response");


class OrderController {

  create = async (req, res) => {
    const orderRequest = req.body;
    const newOrder = new Order(orderRequest);

    try {
      const orderSaved = await newOrder.save();
      const orderDetails = orderSaved.orderDetails[0];
      const userOrder = await User.findOne({ _id: orderSaved.user });
      const room = await Room.findOne({ _id: orderDetails.room });
      const subject = `Invoice Order room ${orderSaved.customerName}'s`;
      const text =
        `
          <div style="color: black">
  <div class="email" style="  max-width: 480px;
        margin: 1rem auto;
        border-radius: 10px;
        border-top: #d74034 2px solid;
        border-bottom: #d74034 2px solid;
        box-shadow: 0 2px 18px rgba(0, 0, 0, 0.2);
        padding: 1.5rem;
        font-family: Arial, Helvetica, sans-serif;">
    <div class="email-head" style=" border-bottom: 1px solid rgba(0, 0, 0, 0.2); padding-bottom: 1rem;">
      <div class="head-img" style=" max-width: 240px;
        padding: 0 0.5rem;
        display: block;
        margin: 0 auto;
        font-weight: bolder;
        text-align: center;
">
        TRIPPER | Booking
      </div>
    </div>
    <div class="email-body">
      <div class="body-text" style=" padding: 2rem 0 1rem;
        text-align: center;
        font-size: 1.15rem;">
        <div class="body-greeting"
             style="
        font-weight: bold;
        margin-bottom: 1rem;
">
          Hi, ${userOrder.fullName || userOrder.username}!
        </div>
        Your order has been successfully completed and delivered to You!
      </div>

      <div class="body-table" style="text-align: left;">
        <table style="  width: 100%;font-size: 1.1rem; padding: 10px">
          <tr>
            <td>Room name:</td>
            <td style=" text-align: right; padding-bottom: 15px; color: red"> ${room.name}</td>
          </tr>
          <tr>
            <td>Price:</td>
            <td style=" text-align: right; padding-bottom: 15px; ">${room.price}</td>
          </tr>

          <tr>
            <td>Check in:</td>
            <td style=" text-align: right; padding-bottom: 15px; ">${orderDetails.dates.checkInDate}</td>
          </tr>
          <tr>
            <td>Check out:</td>
            <td style=" text-align: right; padding-bottom: 15px; ">${orderDetails.dates.checkOutDate}</td>
          </tr>
          <tr>
            <td>Customer name:</td>
            <td style=" text-align: right; padding-bottom: 15px; ">${orderSaved.customerName}</td>
          </tr>
          <tr>
            <td>Customer phone :</td>
            <td style=" text-align: right; padding-bottom: 15px; ">${orderSaved.customerPhone}</td>
          </tr>
          <tr>
            <td>Tax price:</td>
            <td style=" text-align: right; padding-bottom: 15px; ">${orderSaved.taxPrice}</td>
          </tr>
          <tr>
            <td>Payment method:</td>
            <td style=" text-align: right; padding-bottom: 15px; ">${orderSaved.paymentMethod}</td>
          </tr>
          <tr>
            <td>Status:</td>
            <td style=" text-align: right; padding-bottom: 15px; ">${orderSaved.status}</td>
          </tr>
          <tr>
            <td>Num of guest:</td>
            <td style=" text-align: right; padding-bottom: 15px; ">${orderDetails.adults}:adults, ${orderDetails.child}:child, ${orderDetails.infants}:infants</td>
          </tr>
          <tr>
            <td>Total:</td>
            <td style=" text-align: right; padding-bottom: 15px; color: red"><strong>${room.price + orderSaved.taxPrice}</strong></td>
          </tr>
        </table>
      </div>
      <div class="body-text bottom-text"
           style="
         padding: 2rem 0 1rem;
        text-align: center;
        font-size: 0.8rem;
              ">
        Thank You
      </div>
    </div>
    <div class="email-footer" style=" border-top: 1px solid rgba(0, 0, 0, 0.2);">
      <div class="footer-text" style=" font-size: 0.8rem;        text-align: center;padding-top: 1rem;">
        &copy; <a href="https://localhost:3000/" target="_blank" style="      color: #d74034;">nlu.booking.com</a>
      </div>
    </div>
  </div>
</div>
      
        `;

      await Mail.send(userOrder.email, subject, text);
      return res.status(200).json(response.ORDER.CREATE.SUCCESS(orderSaved));
    } catch (error) {
      return res.status(200).json(response.ORDER.CREATE.FAILURE("Bad request :" + error));
    }
  };

  show(req, res, next) {
    const _id = req.params.id;
    Order.findById({ _id })
      .then((order) => {
        res.status(200).json({
          action: "find order by id",
          success: true,
          message: `find order by id successfully`,
          data: order
        });
      })
      .catch((error) => {
        res.status(500).json({
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
        res.status(200).json({
          action: "GET all order",
          success: true,
          message: "GET all order successfully",
          data: orders
        });
      })
      .catch((error) => {
        res.status(500).json({
          action: "GET all order",
          success: false,
          message: `GET all order failed : ${error}`,
          data: null
        });
      });
  }

  update(req, res, next) {
    const _id = req.params.id;
    const orderRequest = req.body;
    Order.findOneAndUpdate({ _id }, orderRequest, { new: true })
      .then((order) => {
        res.status(200).json({
          action: "create order",
          success: true,
          message: "create order successfully",
          data: order
        });
      })
      .catch((error) => {
        res.status(500).json({
          action: "create order",
          success: false,
          message: `create order error : ${error}`,
          data: null
        });
      });
  }

  garbage(req, res, next) {
    Order.findDeleted({})
      .then((orders) => {
        res.status(200).json({
          action: "get all orders from garbage",
          success: true,
          message: "get all orders from garbage successfully",
          data: orders
        });
      })
      .catch((error) => {
        res.status(200).json({
          action: `get all orders from garbage`,
          success: true,
          message: `Internal Server Error : ${error}`,
          data: null
        });
      });
  }

  delete(req, res, next) {
    const _id = req.params.id;
    Order.delete({ _id })
      .then((order) => {
        res.status(200).json({
          action: "delete order by id",
          success: true,
          message: `delete order by id successfully`,
          data: order
        });
      })
      .catch((error) => {
        res.status(500).json({
          action: "delete order by id",
          success: false,
          message: `Internal Server Error : ${error}`,
          data: null
        });
      });
  }

  completeDelete(req, res, next) {
    const _id = req.params.id;
    Order.remove({ _id })
      .then((order) => {
        res.status(200).json({
          action: "remove order by id",
          success: true,
          message: `remove order by id successfully`,
          data: order
        });
      })
      .catch((error) => {
        res.status(500).json({
          action: "remove order by id",
          success: false,
          message: `Internal Server Error : ${error}`,
          data: null
        });
      });
  }

  restore(req, res, next) {
    const _id = req.params.id;
    Order.restore({ _id })
      .then((order) => {
        res.status(200).json({
          action: "restore order by id",
          success: true,
          message: `restore order by id successfully`,
          data: order
        });
      })
      .catch((error) => {
        res.status(500).json({
          action: "restore order by id",
          success: false,
          message: `restore Server Error : ${error}`,
          data: null
        });
      });
  }
 
}

module.exports = new OrderController();
