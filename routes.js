const express = require("express");
const Todos = require("./models/Todos");
const router = express.Router();

// Get all todos
router.get("/todos", async (req, res) => {
  const todos = await Todos.find();
  res
    .status(201)
    .send(await Todos.findOne({}, {}, { sort: { createdAt: -1 } }));
});

// Post todos
router.post("/todos", async (req, res) => {
  const todo = new Todos({
    todos: req.body.newTodos,
  });
  await todo.save();
  return res
    .status(201)
    .send(await Todos.findOne({}, {}, { sort: { createdAt: -1 } }));
});

module.exports = router;
