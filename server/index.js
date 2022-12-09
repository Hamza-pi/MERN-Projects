require("./db/config");
const express = require("express");
const Notes = require("./schema/notes");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

// REST Api
app.get("", async (req, resp) => {
  const notes = await Notes.find();
  resp.send(notes);
});

app.post("", async (req, resp) => {
  const note = new Notes({
    title: req.body.title,
    data: req.body.data,
  });
  const result = await note.save();
  resp.send(result);
});
app.post("/search", async (req, resp) => {
  const noteTitle = req.body.title;
  const note = await Notes.find({
    $or: [{ title: { $regex: noteTitle } }],
  });
  resp.send(note);
});
app.delete("/:id", async (req, resp) => {
  const noteId = req.params.id;
  const result = await Notes.findOneAndDelete({ _id: noteId });
  resp.send(result);
});
app.put("/:id", async (req, resp) => {
  const noteId = req.params.id;
  const noteTitle = req.body.title;
  const noteData = req.body.data;
  await Notes.updateOne(
    { _id: noteId },
    { $set: { title: noteTitle, data: noteData } }
  );
  const result = await Notes.findById(noteId);
  resp.send(result);
});
app.listen(5000);
