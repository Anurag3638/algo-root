const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, default: "" },
  completed: { type: Boolean, default: false },
  reminder: { type: Date, default: null }, // New field for reminders
}, { timestamps: true });

module.exports = mongoose.model("Task", TaskSchema);
