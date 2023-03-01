import React from 'react'
import EmptyMessage from '../../components/EmptyMessage/EmptyMessage'
import Task from '../../components/Task/Task'

const CompleteTasks = ({completedTasks, toggleComplete, handleDelete, handleEdit, toggleEditing}) => {
  return (
    <div className='items-container'>
      {completedTasks.length > 0 
        ? (completedTasks.map(item => 
          <Task key={item.id} task={item} toggleComplete={toggleComplete} handleEdit={handleEdit} handleDelete={handleDelete} toggleEditing={toggleEditing}/>
          ))
        : <EmptyMessage/>}
    </div>
  )
}

export default CompleteTasks