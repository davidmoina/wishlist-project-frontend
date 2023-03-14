import { useEffect, useState } from "react";
import { generatorId } from "../services/taskIdGenerator";
import { TasksContext } from "./TasksContext"

const TasksProvider = ({children}) => {

  const tasksLocalStorage = JSON.parse(localStorage.getItem("tasks") || "[]");

  const [data, setData] = useState(tasksLocalStorage)

  const id = generatorId();

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(data));
  }, [data]);

  const addTask = (text) => {
    const newTaskArr = [...data, {...text, id: id}]  
    setData(newTaskArr);
  }

  const onDelete = (task) => {
    const results = data.filter((item) => item.id !== task.id);
    setData(results);
  };

  const onEdit = (task, newText) => {
    const taskEdited = data.map(item => item.id === task.id ? {...item, text: newText, isEditing: false} : item)
    setData([...taskEdited]);
  }

  const toggleComplete = (task) => {
    const taskEdited = data.map(item => item.id === task.id ? {...item, done: !task.done} : item)
    setData([...taskEdited]);
  }

  const toggleEditing = (task) => {
    const taskEdited = data.map(item => item.id === task.id ? {...item, isEditing: !task.isEditing} : item)
    setData([...taskEdited]);
  }

  return (
    <TasksContext.Provider value={{data, addTask, onDelete, onEdit, toggleComplete, toggleEditing}}>
      {children}
    </TasksContext.Provider>
  )
}

export default TasksProvider