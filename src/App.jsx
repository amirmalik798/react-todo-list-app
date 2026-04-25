import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './styles.css'
import TaskList from './components/TaskList'
import TaskForm from './components/TaskForm'

function App() {
  const [tasks, setTasks] = useState(() =>
  JSON.parse(localStorage.getItem("tasks")) || []
  );    
  
  function taskAlreadyExists(taskTitle) {
    return tasks.some((task) => {
      return task.taskTitle.toLowerCase().trim() === taskTitle.toLowerCase().trim();
    });
  }

  function addNewTask(taskTitle) {
    const newTask = {
      id: crypto.randomUUID(),
      taskTitle: taskTitle,
      completed: false
    }
    setTasks((prev) => {
      return [...prev, newTask];
    });
  }

  function deleteTask(taskToDelete) {
    setTasks((prev) => prev.filter((task) => {
      return task.id !== taskToDelete.id;
    }));
  }

  function toggleTask(taskToToggle) {
    setTasks((prev) => prev.map((task) => {
      return task.id === taskToToggle.id ? {...task, completed: !task.completed } : task;
    }));
  }
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  return (
    <>
    <h2>To Do List</h2>
    
     <TaskForm taskAlreadyExists={taskAlreadyExists} addNewTask={addNewTask}></TaskForm>
     <TaskList tasks={tasks} deleteTask={deleteTask} toggleTask={toggleTask}/>

     <h4>Developed By: Amir Malik</h4>
    </>
  )
}

export default App
