import TaskItem from "./TaskItem";

function TaskList({tasks, deleteTask, toggleTask}) {
    return (
        <ul className="todo-list">
            {tasks.map((task, index) => {
                return <TaskItem key={index} task={task} deleteTask={deleteTask} 
                toggleTask={toggleTask}/>
            })}
        </ul>
    )
}

export default TaskList;