import { useState } from "react";
import { createTask } from "../api";

const TaskForm = ({ refreshTasks }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [reminder, setReminder] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title) return;

    await createTask({ title, description, reminder });
    setTitle("");
    setDescription("");
    setReminder("");
    refreshTasks();
  };

  return (
    <form onSubmit={handleSubmit} className="bg-dark p-4 rounded shadow-sm d-flex flex-column gap-3">
      <input
        type="text"
        className="form-control p-2 bg-secondary text-white"
        placeholder="Task Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <input
        type="text"
        className="form-control p-2 bg-secondary text-white"
        placeholder="Task Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <input
        type="datetime-local"
        className="form-control p-2 bg-secondary text-white"
        value={reminder}
        onChange={(e) => setReminder(e.target.value)}
      />
      <button type="submit" className="btn btn-primary">
        Add Task
      </button>
    </form>
  );
};

export default TaskForm;
