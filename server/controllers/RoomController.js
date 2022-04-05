const Room = require("../models/Room");

const createRoom = async (req, res) => {
  const {
    name, host, category, shortDescription,
    description, image, images, price, rating, numReviews,
    reviews, address, status
  } = req.body;

  if (!name || !host || !category || !shortDescription || !description
    || !image || !images || !price || !rating || !numReviews || !reviews
    || !address || !status) return res.status(400)
    .json({ success: false, message: "Missing required fields" });
};