const express = require("express");
const Todos = require("./models/Todos");
const router = express.Router();

// Get all todos
router.get("/todos", async (req, res) => {
  const todos = await Todos.find();
  res.send(todos);
});

module.exports = router;
