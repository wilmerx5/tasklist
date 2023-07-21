import TaskCard from "./TaskCard"
import { useState, useEffect,useContext } from "react"
import { TaskContext } from "../context/taskContext"

function Tasks(props) {
    const {tasks,deleteTask}=useContext(TaskContext)
    const [message, setMessage]=useState("")
    // useEffect((console.log("ok")),[tasks])
    return (
        <div>{tasks.map((e, i) => <TaskCard  key={i} task={e} /> )}
        </div>
    )
}

export default Tasks