import React from 'react'
import Loader from '../../components/Loader/Loader'
import Task from '../../components/Task/Task'

const CompleteTasks = ({completedTasks, toggleComplete, handleDelete, handleEdit, toggleEditing}) => {
  return (
    <div className='items-container'>
      {completedTasks.length > 0 
        ? (completedTasks.map(item => 
          <Task key={item.id} task={item} toggleComplete={toggleComplete} handleEdit={handleEdit} handleDelete={handleDelete} toggleEditing={toggleEditing}/>
          ))
        : <Loader/>}
    </div>
  )
}

export default CompleteTasks