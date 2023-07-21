import { useContext } from "react"
import { TaskContext } from "../context/taskContext"

function TaskCard({ task }) {

    const {deleteTask}= useContext(TaskContext)
   
    return (
        <div >
            <h3>{task.tittle} </h3>
            <p>{task.description} </p>
            <button onClick={()=>deleteTask(task.id)}>delete</button>

        </div>
    )
}

export default TaskCard