require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const app = express();
const mongoose = require("mongoose");
const PORT = process.env.PORT || 3000;

//routes
const authRoutes = require("./routes/auth.js");
const roomRoutes = require("./routes/room.js");

app.use(morgan("combined"));

app.use(express.json());
const connectDB = async () => {
  try {
    console.log(`${process.env.DB_USERNAME} + ${process.env.DB_PASSWORD}`);
    await mongoose.connect(`mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.cc4og.mongodb.net/booking?retryWrites=true&w=majority`);
    console.log("Database connected");
  } catch (e) {
    console.log(e);
    process.exit(1);
  }
};
// connectDB();

app.get("/", (res, req) => {
  return res.send("hello World");
});

/*
  routes auth
  url : ../api/auth/
*/
app.use("/api/auth", authRoutes);
app.use("/api/room", roomRoutes);

app.listen(PORT, () => console.log(`Server is running at port :${PORT}`));
