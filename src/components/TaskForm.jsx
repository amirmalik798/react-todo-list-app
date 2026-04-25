import { useState } from "react";


function TaskForm({addNewTask, taskAlreadyExists}) {
    const [newTask, setNewTask] = useState("");
    const [error, setError] = useState(null);

    function handleSubmit(e) {
        e.preventDefault();
        if (!newTask || newTask.trim() === "") {
            setError("Error: Please Provide Title For New Task.");
            return;
        }
        if (taskAlreadyExists(newTask)) {
            setError("Error: Task With Same Title Already Exists.");
            return;
        }
        addNewTask(newTask);
        setError(null);
        setNewTask("");
    }

    return (
     <form className="todo-form" onSubmit={handleSubmit}>
        <div className="input-row">
            <input
            className="todo-input"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            placeholder="Enter a task..."
            />
            <button className="add-btn" type="submit">
            Add
            </button>
        </div>
        {error && <span className="error">{error}</span>}
    </form>
    )
}

export default TaskForm;