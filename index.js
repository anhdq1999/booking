require('dotenv').config()
const express = require("express");
const morgan = require("morgan");
const app = express();

const PORT = process.env.PORT || 3000;

//routes
const authRoutes = require('./routes/auth.js')

app.use(morgan("combined"));
app.get("/", (res, req) => {
  return res.send("hello World");
});
app.use(express.json());
app.listen(PORT, () => console.log(`Server is running at port :${PORT}`));
