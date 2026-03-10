import useForm from "../customHooks/useForm";
import { useState } from "react";

export function TaskManager(){

    
    const [tasks, setTasks] = useState([]);
    const {task,handleChange,reset} = useForm();

    const addTask=(e)=>{
        e.preventDefault();
        setTasks([...tasks,task]);
        reset();
    }


    return (
        <>
        <div>

            <h1>Task Manager</h1>

            <form  className="border rounded-lg p-2 text-white flex gap-2">
                <div className="flex gap-2 items-center" >

                <label htmlFor=""> title </label>
                <input type="text" className="bg-stone-900 p-2 rounded-md" placeholder="title" name="title" onChange={handleChange} />
                </div>

                <div className="flex gap-2 items-center">

                <label htmlFor=""> priority </label>
                <select name="priority" className="bg-stone-900 p-2 rounded-md" onChange={handleChange} id="">
                    <option value="low"> low </option>
                    <option value="medium"> medium </option>
                    <option value="high"> high </option>
                </select>
                </div>


                <button onClick={addTask} >  add task </button>
            </form>


            <div className="text-left p-2 mt-4 rounded-lg bg-stone-900 border-stone-700">
                <p className="">My tasks</p>
                {tasks.map((task, index) =>
                <div className="border-white border-1 p-2" key={task.title} >
                    <span>  {index+1}  </span>
                    <span>  {task.title}  </span>
                    <span className="text-xs">  {task.priority}  </span>
                </div>)
                }
            </div>


        </div>
        
        </>
    )

}