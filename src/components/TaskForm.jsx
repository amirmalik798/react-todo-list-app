import { useState, useEffect } from "react";


function TaskForm({addNewTask, taskAlreadyExists, setQueryType}) {
    const [newTask, setNewTask] = useState("");
    const [newDate, setNewDate] = useState("");
    const [error, setError] = useState(null);

    function handleSubmit(e) {
        e.preventDefault();
        setQueryType("All Tasks");
        if (!newTask || newTask.trim() === "") {
            setError("Error: Please Provide Title For New Task.");
            return;
        }
        if (taskAlreadyExists(newTask)) {
            setError("Error: Task With Same Title Already Exists.");
            return;
        }
        addNewTask(newTask, newDate);
        setError(null);
        setNewTask("");
    }

    useEffect(() => {
    const today = new Date();
    const yyyy = today.getFullYear();
    const mm = String(today.getMonth() + 1).padStart(2, "0"); // Months start at 0
    const dd = String(today.getDate()).padStart(2, "0");
    setNewDate(`${yyyy}-${mm}-${dd}`);
    }, []);
    const today = new Date().toISOString().split("T")[0];

    return (
     <form className="todo-form" onSubmit={handleSubmit}>
        <div className="input-row">
            <input
            className="todo-input"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            placeholder="Enter a task..."
            />
            <input type="date"
            value={newDate} min={today}
            onChange={(e) => setNewDate(e.target.value)}/>
            <button className="add-btn" type="submit">
            Add
            </button>

        </div>
        {error && <span className="error">{error}</span>}
    </form>
    )
}

export default TaskForm;