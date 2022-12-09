const mongoose = require("mongoose");
const tasksSchema = new mongoose.Schema({
  data: {
    type: String,
    required: true,
  },
  done: {
    type: Boolean,
    default: false,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});
const tasksModel = mongoose.model("tasks", tasksSchema);
module.exports = tasksModel;
