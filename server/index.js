require("./db/config");
const cors = require("cors");
const express = require("express");
const Tasks = require("./schemas/tasks");

const app = express();

app.use(express.json());
app.use(cors());

app.get("/", async (req, resp) => {
  try {
    let todos = await Tasks.find().sort({ createdAt: -1 });
    resp.send(todos);
  } catch (err) {
    console.log("Error in fetching Todos ", err.message);
  }
});

app.get("/:id", async (req, resp) => {
  try {
    const todoRef = await Tasks.findById(req.params.id);
    const todo = await Tasks.findOneAndUpdate(
      {
        _id: req.params.id,
      },
      { done: !todoRef.done }
    );
    const result = await todo.save();
    resp.send(result);
  } catch (err) {
    console.log("Error in toggling todo", err.message);
  }
});

app.post("/", async (req, resp) => {
  try {
    const newTodo = new Tasks({
      data: req.body.data,
      createdAt: Date.now(),
    });
    const result = await newTodo.save();

    resp.send(result);
  } catch (error) {
    console.log("Error in posting todo ", error.message);
  }
});

app.put("/:id", async (req, resp) => {
  try {
    await Tasks.updateOne(
      { _id: req.params.id },
      { $set: { data: req.body.data } }
    );
    const result = await Tasks.findById(req.params.id);
    resp.send(result);
  } catch (err) {
    console.log("Error in updating todo ", err.message);
  }
});

app.delete("/:id", async (req, resp) => {
  const result = await Tasks.findByIdAndDelete(req.params.id);
  resp.send(result);
});
app.listen(5000);
