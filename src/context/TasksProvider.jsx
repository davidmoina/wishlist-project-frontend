import { useEffect, useState } from "react";
import { TasksContext } from "./TasksContext"
import { useTasks } from "../hooks/useTasks";
import { useAuth0 } from "@auth0/auth0-react";

const TasksProvider = ({children}) => {

  const [data, setData] = useState([]);
  const [userId, setUserId] = useState("");
  const { isAuthenticated } = useAuth0();
  const [loading, setLoading] = useState(false);
  
  const { getTasks } = useTasks();

  useEffect(() => {

    if(isAuthenticated) {
      setLoading(true)
      getTasks().then(tasks => {
        setData(tasks)
        setLoading(false)
      })
    }

  }, [userId]);

  const onDelete = (task) => {
    const results = data.filter((item) => item._id !== task._id);
    setData(results);
  };

  const onEdit = (task, prop) => {
    const taskEdited = data.map(item => item._id === task._id ? {...item, ...prop} : item)
    setData([...taskEdited]);
  }

  return (
    <TasksContext.Provider value={{data, setData, onEdit, onDelete, setUserId, loading}}>
      {children}
    </TasksContext.Provider>
  )
}

export default TasksProvider