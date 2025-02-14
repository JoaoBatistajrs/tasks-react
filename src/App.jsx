import './App.css'
import { useState } from 'react'
import Tasks from './components/Tasks'
import AddTasks from './components/AddTasks'

function App() {

  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Doctors Appointment',
      day: 'Feb 5th at 2:30pm',
      reminder: true,
    },
    {
      id: 2,
      text: 'Meeting at School',
      day: 'Feb 6th at 1:30pm',
      reminder: true,
    },
    {
      id: 3,
      text: 'Food Shopping',
      day: 'Feb 5th at 2:30pm',
      reminder: false,
    },
  ])
  
  return (
    <>
      <div className='w-screen h-screen bg-slate-500 flex justify-center p-6'>
        <div className='w-[500px]'>
          <h1 className="text-3xl font-bold text-slate-100 flex text-center">Tasks Admin</h1>
          <AddTasks/>
          <Tasks tasks={tasks}/>
        </div>
      </div>
    </>
  );
}

export default App
