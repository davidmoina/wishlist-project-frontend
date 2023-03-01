import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import './filterList.scss'

const FilterList = ({tasksCount, completeCount, activeCount}) => {
  const totalTasks = tasksCount();
  const totalActive = activeCount()
  const totalComplete = completeCount()

  return (
    <div className='filter-container'>
      <NavLink className={({isActive}) => isActive ? "link link--active" : "link"} to="/">Whishes <span className='tasks-count'>{totalTasks}</span></NavLink>
      <NavLink className={({isActive}) => isActive ? "link link--active" : "link"} to="/active">Active <span className='tasks-count'>{totalActive}</span></NavLink>
      <NavLink className={({isActive}) => isActive ? "link link--active" : "link"} to="/completed">Completed <span className='tasks-count'>{totalComplete}</span></NavLink>
    </div>
  )
}

export default FilterList