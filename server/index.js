const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const LoginModel = require("./models/Login");

const app = express();
app.use(express.json());
app.use(cors());

// Connect to MongoDB
mongoose
  .connect("mongodb+srv://okuhle:okuhle12@okuhle.devxb4e.mongodb.net/Login", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("MongoDB connected");
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
  });

// Define a POST route to create a user
app.post("/", (req, res) => {
  // You should access the request body using req.body, not req, body
  LoginModel.create(req.body)
    .then((user) => res.json(user))
    .catch((err) => res.status(400).json(err)); // Handle errors properly
});

app.listen(3001, () => {
  console.log("Server is running on port 3001");
});
