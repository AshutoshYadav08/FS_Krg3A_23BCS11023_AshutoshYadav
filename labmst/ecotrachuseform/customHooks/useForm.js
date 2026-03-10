import { useState } from "react"


export default function useForm (){


    const [task, setTask] = useState({title:"",priority:"low"});


    const handleChange = (e) => {
        const {name, value} = e.target;
        setTask((t)=>({...t,[name]:value}))
    }

    const reset = ()=>{
        setTask({title:"",priority:"low"})
    }

    



    return {        

        task,
        handleChange,
        reset

    }




}