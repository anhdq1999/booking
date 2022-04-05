require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const app = express();

const PORT = process.env.PORT || 3000;

const database = require("./config/database/connectDB");

//routes

const authRoutes = require("./routes/auth");
app.use(morgan("combined"));

app.use(express.json());

database.connectDB();

app.get("/", (req, res) => {
  res.send("hello World");
});


app.use("/api/auth", authRoutes);

app.listen(PORT, () => console.log(`Server is running at port :${PORT}`));
