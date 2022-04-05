const User = require("../models/Users");


const show = async (req, res, next) => {

};
const create = async (req, res) => {
  const { username, password, email, phone, fullName, address, roles } = req.body;
  if (!username || !password || !email || !phone || !fullName || !address || !roles)
    return res.status(400)
      .json({
        success: false,
        message: "Missing required fields"
      });
  try {
    const user = await User.findOne({ username: username });
    if (user) return res
      .status(400)
      .json({
        success: false,
        message: "User is existed"
      });
    const newUser = new User({
      username, password, email, phone, fullName, address, roles
    });
    await newUser.save();
    res.status(200).json({ success: true, message: "User created successfully" });
  } catch (e) {
    console.log(error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

module.exports = { show, create };