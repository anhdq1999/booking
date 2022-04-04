const express = require("express");
const routes = express.Router();

const RoomModel = require("../models/Room");
// @ routes POST /api/room/
// @ desc register room
// @ access Private
routes.get("/", async (req, res) => {
  // const {
  //   name,
  //   host,
  //   category,
  //   shortDescription,
  //   description,
  //   image,
  //   images,
  //   price,
  //   rating,
  //   numReviews,
  //   reviews,
  //   address,
  //   status
  // } = req.body;
  // if (!name || !host || !category || !shortDescription || !description || !images || !image || !price || !rating || !numReviews || !reviews || !address || !status) return res.status(400).json({
  //   success: false,
  //   message: "Missing required fields"
  // });
  res.status(200).json({ success: true, message: "access true" });
});

// @ routes PUT /api/room/
// @ desc update room
// @ access Private
routes.put("/:id", async (req, res) => {
  const roomID = req.params.id;
  if (!roomID) return res.status(400).json({ success: false, message: "Missing required fields" });
  const room = await RoomModel.findById(roomID);
  if (room) {
    room.name = req.body.name;
    room.host = req.body.host;
    room.category = req.body.category;
    room.shortDescription = req.body.shortDescription;
    room.description = req.body.description;
    room.image = req.body.image;
    room.images = req.body.images;
    room.price = req.body.price;
    room.rating = req.body.rating;
    room.numReviews = req.body.numReviews;
    room.reviews = req.body.reviews;
    room.address = req.body.address;
    room.status = req.body.status;
  }

});
/*
{
    "title" : "test room",
    "price" : 123,
    "address" : {
          "country" : "country room",
          "district" : "district room",
          "street" : "street room"
                }
}
*/

module.exports = routes;