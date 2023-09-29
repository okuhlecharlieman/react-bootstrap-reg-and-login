const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect(
  "mongodb+srv://okuhle:okuhle12@okuhle.devxb4e.mongodb.net/Login"
);

app.listen(3001, () => {
  console.log("server is running");
});
