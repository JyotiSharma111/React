import './App.css';
import Header from './components/Header'
import Tasks from './components/Tasks'
import  { useState, useEffect } from 'react';
import Task from './components/Task';
import AddTask from './components/AddTask';


function App() {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([])

  useEffect(() =>{
    const getTasks = async () => {
      const taskFromServer = await fetchTasks()
      setTasks(taskFromServer)
    }
    getTasks()
  },[])


// Add task
const fetchTasks = async() => {
  const res = await fetch('http://localhost:5000/db.json')
  const data = await res.json()
  return data
}

// toggle reminder
const toggleReminder = (id) => {
  setTasks(
   tasks.map((task) =>
    task.id === id ? {...task, reminder:
     !task.reminder} : task
     ))
}

// delete task
const deleteTask = (id) => {
  setTasks(tasks.filter((task)=> task.id !==id))
}

// add task
const addTask = (task) =>{
  const id= Math.floor(Math.random()*1000) +1
  const newTask = { id, ...task}
  setTasks([...tasks, newTask])
}
  return (
    <div className="container">
      <Header title="Task Tracker App"
      showAdd={showAddTask}
       onAdd={() => setShowAddTask(!showAddTask)} />
      {tasks.length> 0 ? 
        <Tasks tasks={tasks}
         onDelete = {deleteTask} onToggle = {toggleReminder} />
          : 'No Tasks to Show'}
      {showAddTask ? <AddTask onAdd={addTask} /> : ''}
    </div>
  );
}

export default App;
