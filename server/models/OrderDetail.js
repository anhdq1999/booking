const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const mongooseDelete = require("mongoose-delete");

const orderDetailSchema = new Schema({
  quantity: { type: Number, required: true },
  price: { type: Number, required: true },
  room: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "rooms",
    require: true
  },
  dates:
    {
      checkInDate: { type: Date, required: true },
      checkOutDate: { type: Date, required: true }
    },
  roles: {
    type: String,
    require: true,
    enum: ["PAID", "DELIVERED", "CONFIRMING"],
    default: "user"
  },
  paidAt: { type: Date },
  deliveredAt: { type: Date },
  itemPrice: { type: Number, required: true }
});
orderDetailSchema.plugin(mongooseDelete, {
  deleteAt: true,
  overrideMethods: true
});
module.exports = mongoose.model("OrderDetail", orderDetailSchema);
