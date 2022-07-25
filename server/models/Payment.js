const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Payment = new Schema({
  user: { type: Array, default: [] },
  data: { type: Array, default: [] },
  product: { type: Array, default: [] }
}, {
  timestamps: true
});
module.exports = mongoose.model("Payment", Payment);
