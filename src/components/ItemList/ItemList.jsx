import React, { useState } from 'react'
import Task from '../Task/Task'
import './itemList.scss'

const ItemList = ({allTasks, toggleComplete, handleEdit, handleDelete}) => {

  return (
    <div className='items-container'>
      {allTasks.map(item => 
      <Task key={item.id} task={item} toggleComplete={toggleComplete} handleEdit={handleEdit} handleDelete={handleDelete}/>
      )} 
    </div>
  )
}

export default ItemList