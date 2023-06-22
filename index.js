// @/main.js
const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const cors = require("cors");

const allowedOrigins = [
  "capacitor://localhost",
  "ionic://localhost",
  "http://localhost",
  "http://localhost:8080",
  "http://localhost:8101",
  "http://localhost:8100",
  "https://bucket-bliss-8484522aca2f.herokuapp.com"
];

// Reflect the origin if it's in the allowed list or not defined (cURL, Postman, etc.)
const corsOptions = {
  origin: (origin, callback) => {
    if (allowedOrigins.includes(origin) || !origin) {
      callback(null, true);
    } else {
      callback(new Error("Origin not allowed by CORS"));
    }
  },
};

if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

mongoose.connect('mongodb+srv://benediktbreitschopf:YUCvRlzKsw44hdAB@cluster0.8l7sc86.mongodb.net/db', { useNewUrlParser: true }).then(() => {
  const app = express();

  // Enable preflight requests for all routes
  app.options("*", cors(corsOptions));

  app.use("/api", cors(corsOptions), routes); // new

  app.listen(3000, () => {
    console.log("Server has started!");
  });
});
