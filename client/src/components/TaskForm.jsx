import { useState } from "react";
import { createTask } from "../api";

const TaskForm = ({ refreshTasks }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createTask({ title, description });
    console.log({title,description});
    refreshTasks();
    setTitle(title);
    setDescription(description);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Task Title" required />
      <input value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Task Description" />
      <button type="submit">Add Task</button>
    </form>
  );
};

export default TaskForm;
