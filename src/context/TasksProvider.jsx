import { useEffect, useState } from "react";
import { generatorId } from "../services/taskIdGenerator";
import { TasksContext } from "./TasksContext"
import { useTasks } from "../hooks/useTasks";
import { useAuth0 } from "@auth0/auth0-react";

const TasksProvider = ({children}) => {

  const [data, setData] = useState([]);
  
  const { getTasks } = useTasks();

  useEffect(() => {

      getTasks().then(tasks => (
        setData(tasks)
      ))

  }, []);


  // const addTask = (text) => {
  //   const newTaskArr = [...data, {...text, id: id}]  
  //   setData(newTaskArr);
  // }

  const onDelete = (task) => {
    const results = data.filter((item) => item._id !== task._id);
    setData(results);
  };

  const onEdit = (task, prop) => {
    console.log(prop);
    const taskEdited = data.map(item => item._id === task._id ? {...item, ...prop} : item)
    setData([...taskEdited]);
  }

  return (
    <TasksContext.Provider value={{data, setData, onEdit, onDelete}}>
      {children}
    </TasksContext.Provider>
  )
}

export default TasksProvider