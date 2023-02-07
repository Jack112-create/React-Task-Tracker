import Header from "./components/Header";
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';
import { useState } from "react"

function App() {
  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Doctors Appointment',
      day: 'Feb 5th at 2:30pm',
      reminder: true,
    },
    {
      id: 2,
      text: 'Dentist Appointment',
      day: 'Jan 5th at 2:30pm',
      reminder: false,
    },
    {
      id: 3,
      text: 'Car Appointment',
      day: 'Mar 5th at 2:30pm',
      reminder: true,
    }
  ])

  // Add Task
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1;

    const newTask = {id: id, ...task};

    setTasks([...tasks, newTask]);
  }

  // Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  }

  // Toggle reminder
  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => task.id === id
    ? {...task, reminder: !task.reminder} : task));
  }

  return (
    <div className="container">
      <Header onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask} title="Task Tracker"/>
      {showAddTask ? <AddTask onAdd={addTask} /> : ''}
      {tasks.length ? <Tasks onToggle={toggleReminder} tasks={tasks} onDelete={deleteTask} /> : 'No Tasks Available'}
    </div>
  );
}

export default App;
