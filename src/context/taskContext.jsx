import { createContext,useState } from "react"
import {task} from "../tasks"

export const TaskContext=createContext()
export function TaskContextProvider(props) {
    const [tasks, setTasks] = useState(task)

    const addTask = (e) => {
      setTasks([...tasks, { tittle: e.tittle, description: e.description, id: tasks.length }])
    }
    const deleteTask=(id)=>{
      setTasks(tasks.filter(t=>t.id !==id))
      
    }

  return (
    <TaskContext.Provider value={{tasks:tasks,addTask:addTask,deleteTask:deleteTask}} >
    {props.children}
    </TaskContext.Provider>
  )
}

