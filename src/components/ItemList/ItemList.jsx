import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { TasksContext } from '../../context/TasksContext'
import EmptyMessage from '../EmptyMessage/EmptyMessage'
import Task from '../Task/Task'
import './itemList.scss'

const ItemList = () => {

  const { data } = useContext(TasksContext);

  const [dataDisplayed, setDataDisplayed] = useState([]);
  
  const { status } = useParams();

  useEffect(() => {
    if(status == "active") {
      const activeTasks = data?.filter(item => item.done === false)
      setDataDisplayed(activeTasks)
    } else if (status == "completed") {
      const doneTasks = data?.filter(item => item.done === true)
      setDataDisplayed(doneTasks)
    } else {
      setDataDisplayed(data);
    }
  }, [data, status])
  
  return (

    <div className='items-container'>
      {dataDisplayed?.length > 0 
        ? (dataDisplayed.map(item => 
          <Task key={item._id} task={item} />
          ))
        : <EmptyMessage/>}
    </div>
  )
}

export default ItemList