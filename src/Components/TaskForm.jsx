import { useState } from "react"
import { useContext } from "react"
import { TaskContext } from "../context/taskContext"

export default function TaskForm(props) {
    const [tittle, setTittle]=useState("")
    const [descriptcion, setDescription]=useState("")
     const {addTask}= useContext(TaskContext)

    // const {tasks,addTask}=props

    return (
        <div>
            <form action="" onSubmit={(e)=>{e.preventDefault(); addTask({tittle:tittle,description:descriptcion});setTittle("");setDescription("")}}>

                <input type="text" value={tittle} onChange={(e)=>setTittle(e.target.value)} placeholder="tittle" />
                <input type="text"value={descriptcion}  onChange={(e)=>setDescription(e.target.value)} placeholder="description"/>
                <input type="submit" />
            </form>
        </div>
    )
}
