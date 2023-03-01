import React from 'react'
import EmptyMessage from '../EmptyMessage/EmptyMessage'
import Task from '../Task/Task'
import './itemList.scss'

const ItemList = ({allTasks, toggleComplete, handleEdit, handleDelete, toggleEditing}) => {

  return (

    <div className='items-container'>
      {allTasks.length > 0 
        ? (allTasks.map(item => 
          <Task key={item.id} task={item} toggleComplete={toggleComplete} handleEdit={handleEdit} handleDelete={handleDelete} toggleEditing={toggleEditing}/>
          ))
        : <EmptyMessage/>}
    </div>
  )
}

export default ItemList