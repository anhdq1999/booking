const userRouter = require("./users.js");
const authRouter = require("./auth.js");
const roomRouter = require("./rooms.js");
const orderRouter = require("./orders.js");

function route(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.use("/users", userRouter);


  app.use("/rooms", roomRouter);

  app.use("/auth", authRouter);

  app.use("/orders", orderRouter);

  app.get("/", (req, res) => {
    res.send("hello World");
  });
}

module.exports = route;
