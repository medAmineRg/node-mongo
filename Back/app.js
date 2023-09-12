const express = require("express");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const app = express();
const cors = require("cors");

const TodoSchema = new Schema({
  name: String,
});

const Todo = mongoose.model("Todo", TodoSchema);

app.use(express.json());
app.use(cors());

mongoose
  .connect("mongodb://mongo:27017", { useNewUrlParser: true })
  .then(async (res) => {
    const todo1 = new Todo({ name: "pray" });
    const todo2 = new Todo({ name: "search" });
    const todo3 = new Todo({ name: "recover" });
    await todo1.save();
    await todo2.save();
    await todo3.save();
    console.log("added");
  })
  .catch((err) => {
    console.log("err");
  });

app.get("/todos", async (req, res) => {
  const todos = await Todo.find();
  res.send(todos);
});

app.post("/todos", async (req, res) => {
  const todo = req.body.todo;
  const newTodo = new Todo({ name: todo });
  await newTodo.save();
  res.send(newTodo);
});

app.listen(5000, () => {
  console.log("server has started");
});
