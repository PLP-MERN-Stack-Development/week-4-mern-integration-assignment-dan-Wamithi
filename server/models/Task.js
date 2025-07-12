const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  completed: { type: Boolean, default: false }, // fixed typo
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User", // match your User model name
    required: true
  }
});

module.exports = mongoose.model("Task", taskSchema); // fixed typo here
