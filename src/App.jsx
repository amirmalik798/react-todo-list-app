import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './styles.css'
import TaskList from './components/TaskList'
import TaskForm from './components/TaskForm'
import Controls from './components/Controls'

function App() {
  const [tasks, setTasks] = useState(() =>
  JSON.parse(localStorage.getItem("tasks")) || []
  );    
  const [queryType, setQueryType] = useState("All Tasks");

  function taskAlreadyExists(taskTitle) {
    return tasks.some((task) => {
      return task.taskTitle.toLowerCase().trim() === taskTitle.toLowerCase().trim();
    });
  }

  function addNewTask(taskTitle, taskDate) {
    const newTask = {
      id: crypto.randomUUID(),
      taskTitle: taskTitle,
      taskDate: taskDate,
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

  function clearAllTasks() {
    setTasks([]);
  }

  function getFilteredTasks() {
    if (queryType === 'All Tasks') {
      return tasks;
    }
    else if (queryType === 'Incomplete Tasks') {
      return tasks.filter((task) => task.completed === false);
    }
    else {
      return tasks.filter((task) => task.completed)
    }
  }

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  return (
    <>
      <>
    <h2>React To-Do List App</h2>
    <Controls clearAllTasks={clearAllTasks}  queryType={queryType} setQueryType={setQueryType}/>
     <TaskForm taskAlreadyExists={taskAlreadyExists} addNewTask={addNewTask} setQueryType={setQueryType}></TaskForm>
     
     <h4>({getFilteredTasks().length}) {queryType}</h4>
     <TaskList tasks={getFilteredTasks()} deleteTask={deleteTask} toggleTask={toggleTask}/>

     <h4>Developed By: Amir Malik</h4>
     </>
    </>
  )
}

export default App
