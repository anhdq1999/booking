const express = require("express");
const router = express.Router();

const PaymentController = require("../controllers/Payment");

router.get("/config", (req, res) => {
  res.send(
    process.env.PAYPAL_CLIENT_ID
  );
});

module.exports = router;
