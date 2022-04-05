
const userRouter = require('./users');
const roomRouter = require("./rooms");



function route(app) {
  app.use("/users", userRouter);
  app.use("/rooms", roomRouter);

  app.get('/', (req, res) => {
    res.send('hello World');
  });

}

module.exports = route;
