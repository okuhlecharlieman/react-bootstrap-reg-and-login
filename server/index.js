const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const LoginModel = require("./models/Login");

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect(
  "mongodb+srv://okuhle:okuhle12@okuhle.devxb4e.mongodb.net/Login"
);

app.post("/", (req, res) => {
  LoginModel.create(req, body).then((user) =>
    res.json(user).catch((err) => res.json(err))
  );
});
app.listen(3001, () => {
  console.log("server is running");
});
