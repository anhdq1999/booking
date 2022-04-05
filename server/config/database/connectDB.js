const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(`mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.cc4og.mongodb.net/booking?retryWrites=true&w=majority`);
    console.log("Database connected");
  } catch (e) {
    console.log(e);
    process.exit(1);
  }
};
module.exports = { connectDB };