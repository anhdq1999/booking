const userRouter = require('./users.js');
const authRouter = require('./auth.js');
const roomRouter = require('./rooms.js');
const orderRouter = require('./order.js');
const { authJwt } = require('../middlewares');
const { isAdmin } = require('../middlewares/auth.middlewares.js');

function route(app) {
  app.use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.use('/users', [authJwt.verifyToken, authJwt.isAdmin], userRouter);


  app.use('/auth', authRouter);

  app.use('/rooms', roomRouter);

  app.use('/order', orderRouter);

  app.use("/auth", authRouter);

  app.use("/orders", orderRouter);

  app.get("/", (req, res) => {
    res.send("hello World");
  });
}

module.exports = route;
