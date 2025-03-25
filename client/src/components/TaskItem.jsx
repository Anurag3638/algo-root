const TaskItem = ({ task, onDelete, onToggleComplete }) => {
  return (
    <div className="d-flex justify-content-between align-items-center bg-dark p-3 rounded shadow-sm text-white mb-3">
      <div>
        <h3 className={`fw-semibold ${task.completed ? "text-decoration-line-through text" : ""}`}>
          {task.title}
        </h3>
        <p className="text">{task.description}</p>
        {task.reminder && (
          <p className="text-warning">
            Reminder: {new Date(task.reminder).toLocaleString()}
          </p>
        )}
      </div>
      <div className="d-flex gap-2">
        <button
          onClick={() => onToggleComplete(task._id, task.completed)}
          className={`btn ${task.completed ? "btn-warning" : "btn-success"}`}
        >
          {task.completed ? "Undo" : "Complete"}
        </button>
        <button onClick={() => onDelete(task._id)} className="btn btn-danger">
          Delete
        </button>
      </div>
    </div>
  );
};

export default TaskItem;
