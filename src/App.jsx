import { useState } from 'react'
import Tasks from './Components/Tasks'
import TaskForm from './Components/TaskForm'
import { task } from './tasks'

const App = () => {

  return (
    <>
      <TaskForm  />
      <Tasks />
    </>)
}

export default App