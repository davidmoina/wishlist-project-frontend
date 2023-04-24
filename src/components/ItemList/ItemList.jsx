import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { TasksContext } from '../../context/TasksContext'
import EmptyMessage from '../EmptyMessage/EmptyMessage'
import Task from '../Task/Task'
import './itemList.scss'
import { InfoLoader } from '../InfoLoader/InfoLoader'

const ItemList = () => {

  const { data, loading } = useContext(TasksContext);

  const [dataDisplayed, setDataDisplayed] = useState([]);
  
  const { status } = useParams();

  useEffect(() => {
    if(status == "active") {
      const activeTasks = data?.filter(item => item.done === false && item.archived === false)
      setDataDisplayed(activeTasks)
    } else if (status == "completed") {
      const doneTasks = data?.filter(item => item.done === true && item.archived === false)
      setDataDisplayed(doneTasks)
    } else if (status == "archived") {
      const archivedTasks = data?.filter(item => item.archived === true)
      setDataDisplayed(archivedTasks)
    } else {
      const tasks = data?.filter(item => item.archived === false)
      setDataDisplayed(tasks);
    }
  }, [data, status]);

  if(loading) return <InfoLoader/>
  
  return (

    <div className='items-container'>
      {dataDisplayed.length > 0 
        ? (dataDisplayed.map(item => 
          <Task key={item._id} task={item}/>
          ))
        : <EmptyMessage/>}
    </div>
  )
}

export default ItemList