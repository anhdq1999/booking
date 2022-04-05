const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const orderSchema = new Schema({
  orderItems: [
    {
      quantity: { type: Number, required: true },
      price: { type: Number, required: true },
      rooms: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "rooms",
          require: true
        }
      ]
    }
  ],
  paymentMethod: { type: String, required: true },
  paymentResult: {
    id: String,
    status: String,
    update_time: String,
    email_address: String
  },
  itemPrice: { type: Number, required: true },
  // taxPrice: { type: Number, required: true },
  // totalPrice: { type: Number, required: true },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users"
  },
  isPaid: { type: Boolean, default: false },
  paidAt: { type: Date }
  // isDelivered: { type: Boolean, default: false },
  // deliveredAt: { type: Date }

}, {
  timestamps: true
});



module.exports = mongoose.model("Order", orderSchema);

