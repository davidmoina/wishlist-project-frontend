import React from 'react'
import Loader from '../../components/Loader/Loader'
import Task from '../../components/Task/Task'

const ActiveTasks = ({activeTasks, toggleComplete, handleDelete, handleEdit, toggleEditing}) => {
  return (
    <div className='items-container'>
      {activeTasks.length > 0 
        ? (activeTasks.map(item => 
          <Task key={item.id} task={item} toggleComplete={toggleComplete} handleEdit={handleEdit} handleDelete={handleDelete} toggleEditing={toggleEditing}/>
          ))
        : <Loader/>}
    </div>
  )
}

export default ActiveTasks