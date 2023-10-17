const mongoose = require("mongoose");

const LoginSchema = new mongoose.Schema({
  username: String,
  email: String,
  password: String,
});

const LoginModel = mongoose.model("User", LoginSchema);
module.exports = LoginModel;
