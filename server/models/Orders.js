const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const mongooseDelete = require("mongoose-delete");


const orderSchema = new Schema(
  {
    orderDetails: [{
      type: mongoose.Schema.Type.ObjectId,
      ref: "orderDetail"
    }],
    paymentMethod: { type: String, required: true },
    paymentResult: {
      id: String,
      status: String,
      update_time: String,
      email_address: String
    },
    taxPrice: { type: Number, required: true },
    totalPrice: { type: Number, required: true },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users"
    }
  },
  {
    timestamps: true
  }
);
orderSchema.plugin(mongooseDelete, {
  deleteAt: true,
  overrideMethods: true
});
module.exports = mongoose.model("Order", orderSchema);
