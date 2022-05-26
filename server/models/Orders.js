const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const mongooseDelete = require("mongoose-delete");


const orderSchema = new Schema(
  {
    orderDetails: [
      {
        quantity: { type: Number, required: true },
        price: { type: Number, required: true },
        room: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "rooms",
          require: true
        },
        dates:
          {
            checkInDate: {
              type: Date,
              required: true,
              default: Date.now()
            },
            checkOutDate: {
              type: Date,
              required: true
            }
          },
        status: {
          type: String,
          require: true,
          enum: ["PAID", "DELIVERED", "CONFIRMING"],
          default: "user"
        },
        paidAt: { type: Date },
        deliveredAt: { type: Date }
      }
    ],
    paymentMethod: { type: String, required: true },
    // paymentResult: {
    //   id: String,
    //   status: String,
    //   update_time: String,
    //   email_address: String
    // },
    taxPrice: { type: Number, required: true },
    totalPrice: { type: Number, required: true },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users"
    },
    customerName: { type: String, required: true },
    customerPhone: { type: String, required: true }
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
