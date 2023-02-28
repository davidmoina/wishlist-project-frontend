import React from 'react'
import './filterList.scss'

const FilterList = ({tasksCount}) => {
  const totalTasks = tasksCount();

  return (
    <div className='filter-container'>
      <p>Whishes <span className='tasks-count'>{totalTasks}</span></p>
      <p>Active <span className='tasks-count'>0</span></p>
      <p>Completed <span className='tasks-count'>0</span></p>
    </div>
  )
}

export default FilterList