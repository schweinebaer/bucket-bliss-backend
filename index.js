// @/main.js
const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const cors = require("cors");

if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

mongoose.connect(process.env.URI, { useNewUrlParser: true }).then(() => {
  const app = express();
  app.use(express.json());

  app.use(
    cors({
      origin: "*",
    })
  );

  app.use("/api", routes); // new

  app.listen(process.env.PORT || 5000, () => {
    console.log("Server has started!");
  });
});
