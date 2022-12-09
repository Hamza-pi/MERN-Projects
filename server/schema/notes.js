const mongoose = require("mongoose");
const notesSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  data: {
    type: String,
    required: true,
  },
  createdAt: {
    type: String,
    default: new Date().toLocaleDateString(),
  },
});
const notesModel = mongoose.model("notes", notesSchema);
module.exports = notesModel;
