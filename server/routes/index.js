const userRouter = require("./users.js");
const authRouter = require("./auth.js");
const roomRouter = require("./rooms.js");
const orderRouter = require("./orders.js");
const uploadImgRouter = require("./upload");

const provinceRouter = require("./province");
const districtRouter = require("./district");
const wardRouter = require("./ward");
const blogRouter = require("./blog");
const categoryRouter = require("./categories");
const mailRouter = require("./mail");

const paymentRouter = require("./payment");
const { authJwt } = require("../middlewares");
const { isAdmin } = require("../middlewares/auth.middlewares.js");

function route(app) {
    app.use(function (req, res, next) {
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });

    app.use("/users", [authJwt.verifyToken, authJwt.isAdmin], userRouter);

    app.use("/auth", authRouter);

    app.use("/rooms", roomRouter);

    // app.use('/orders', [authJwt.verifyToken, authJwt.isAdmin], orderRouter);
    app.use("/orders", orderRouter);



    app.use("/provinces", provinceRouter);

    app.use("/districts", districtRouter);

    app.use("/wards", wardRouter);
    app.use("/blogs", blogRouter);

    app.use("/categories", categoryRouter);

    app.use("/mail", mailRouter);
    app.use("/payment", paymentRouter);


    app.get("/", (req, res) => {
        res.send("hello World");
    });
}

module.exports = route;
