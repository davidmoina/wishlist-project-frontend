import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { TasksContext } from '../../context/TasksContext'
import EmptyMessage from '../EmptyMessage/EmptyMessage'
import Task from '../Task/Task'
import './itemList.scss'

const ItemList = () => {

  const { data, onDelete, onEdit, toggleComplete, toggleEditing } = useContext(TasksContext);

  const [dataDisplayed, setDataDisplayed] = useState(data);

  const { status } = useParams();

  useEffect(() => {
    if(status == "active") {
      const activeTasks = data.filter(item => item.done === false)
      setDataDisplayed(activeTasks)
    } else if (status == "completed") {
      const doneTasks = data.filter(item => item.done === true)
      setDataDisplayed(doneTasks)
    } else {
      setDataDisplayed(data);
    }
  }, [data, status])
  
  return (

    <div className='items-container'>
      {dataDisplayed.length > 0 
        ? (dataDisplayed.map(item => 
          <Task key={item.id} task={item} onDelete={onDelete} onEdit={onEdit} toggleComplete={toggleComplete} toggleEditing={toggleEditing}/>
          ))
        : <EmptyMessage/>}
    </div>
  )
}

export default ItemList