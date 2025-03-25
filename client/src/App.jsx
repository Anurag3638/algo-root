import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

function App() {
  return (
    <div className="min-vh-100 d-flex align-items-center justify-content-center p-3">
      <div className="w-100" style={{ maxWidth: '500px' }}>
        <h1 className="h3 text-center text-black mb-4">Task Manager</h1>
        <TaskForm refreshTasks={() => {}} />
        <div className="mt-4">
          <TaskList />
        </div>
      </div>
    </div>
  );
}

export default App;
