const express = require("express");
const Task = require("../models/task");

const router = express.Router();

// GET all tasks
router.get("/", async (req, res) => {
  try {
    const tasks = await Task.find();
    res.json(tasks);
  } catch (err) {
    res.status(500).json({ message: "Server Error", error: err.message });
  }
});

// POST: Create a new task with an optional reminder
router.post("/", async (req, res) => {
  const { title, description, reminder } = req.body;
  if (!title) return res.status(400).json({ message: "Title is required" });

  try {
    const newTask = new Task({ title, description, reminder });
    await newTask.save();
    res.status(201).json(newTask);
  } catch (err) {
    res.status(500).json({ message: "Failed to create task", error: err.message });
  }
});

// PUT: Update a task (including reminder)
router.put("/:id", async (req, res) => {
  try {
    const updatedTask = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedTask) return res.status(404).json({ message: "Task not found" });

    res.json(updatedTask);
  } catch (err) {
    res.status(400).json({ message: "Invalid task ID", error: err.message });
  }
});

module.exports = router;
