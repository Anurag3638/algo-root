import { useEffect, useState } from "react";
import { getTasks, deleteTask, updateTask } from "../api";
import TaskItem from "./TaskItem.jsx";

const TaskList = () => {
  const [tasks, setTasks] = useState([]);

  const fetchTasks = async () => {
    const { data } = await getTasks();
    setTasks(data);
  };
  useEffect(() => {
    fetchTasks();
  }, []);

  const handleDelete = async (id) => {
    await deleteTask(id);
    fetchTasks();
  };

  const handleToggleComplete = async (id, completed) => {
    await updateTask(id, { completed: !completed });
    fetchTasks();
  };

  return (
    <div className="mb-4">
      {tasks.length === 0 ? (
        <p className="text-center text-muted">No tasks yet. Add some!</p>
      ) : (
        tasks.map((task) => (
          <TaskItem
            key={task._id}
            task={task}
            onDelete={handleDelete}
            onToggleComplete={handleToggleComplete}
          />
        ))
      )}
    </div>
  );
};

export default TaskList;
