

function TaskItem({task, deleteTask, toggleTask}) {

    return (
        <li className={`todo-item ${task.completed ? "completed" : ""}`}>
            <span className="todo-text">{task.taskTitle}</span>
            <div className="actions">
                <button className="btn complete-btn" onClick={() => {
                    toggleTask(task)
                }}>✔</button>
                <button className="btn delete-btn"
                onClick={() => deleteTask(task)}>✖</button>
            </div>
        </li>
    )
} 

export default TaskItem;