import { useEffect, useState } from "react";
import { TasksContext } from "./TasksContext"
import { useTasks } from "../hooks/useTasks";
import { useAuth0 } from "@auth0/auth0-react";
import { useUsers } from "../hooks/useUsers";

const TasksProvider = ({children}) => {

  const [data, setData] = useState([]);
  const [userId, setUserId] = useState("");
  const { isAuthenticated } = useAuth0();
  
  const { getTasks } = useTasks();

  useEffect(() => {

    if(isAuthenticated) {
      getTasks().then(tasks => (
        setData(tasks)
      ))
    }

  }, [userId]);


  // const onAdd = (text) => {
  //   const newTaskArr = [...data, {...text}]  
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
    <TasksContext.Provider value={{data, setData, onEdit, onDelete, setUserId}}>
      {children}
    </TasksContext.Provider>
  )
}

export default TasksProvider