

function TaskItem({task, deleteTask, toggleTask}) {

    return (
        <li className={`todo-item ${task.completed ? "completed" : ""}`}>
            <div className="actions">
                <button className="btn complete-btn" onClick={() => {
                    toggleTask(task)
                }}>✔</button>
            </div>
            <div className="todo-content">
                <span className="todo-text">{task.taskTitle}</span>
                <span className='todo-date'>{task.taskDate}</span>
            </div>
            
            <div className="actions">
                <button className="btn delete-btn"
                onClick={() => deleteTask(task)}>✖</button>
            </div>
        </li>
    )
} 

export default TaskItem;
