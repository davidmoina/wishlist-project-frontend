import React from 'react'
import EmptyMessage from '../../components/EmptyMessage/EmptyMessage'
import Task from '../../components/Task/Task'

const ActiveTasks = ({activeTasks, toggleComplete, handleDelete, handleEdit, toggleEditing}) => {
  return (
    <div className='items-container'>
      {activeTasks.length > 0 
        ? (activeTasks.map(item => 
          <Task key={item.id} task={item} toggleComplete={toggleComplete} handleEdit={handleEdit} handleDelete={handleDelete} toggleEditing={toggleEditing}/>
          ))
        : <EmptyMessage/>}
    </div>
  )
}

export default ActiveTasks