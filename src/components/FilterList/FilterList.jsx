import React, { useContext, useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';
import { TasksContext } from '../../context/TasksContext';
import './filterList.scss'

const FilterList = () => {
  const [countDone, setCountDone] = useState(0);
  const [countActive, setCountActive] = useState(0)
  const [countAll, setCountAll] = useState(0)

  const { data } = useContext(TasksContext);

  useEffect(() => {

    if(data) {
      const activeTasks = data.filter(item => item.done === false)
      setCountActive(activeTasks.length)
    
      const doneTasks = data.filter(item => item.done === true)
      setCountDone(doneTasks.length)
    
      setCountAll(data.length);
    }
    
    
    
  }, [data])

  return (
    <div className='filter-container'>
      <NavLink className={({isActive}) => isActive ? "link link--active" : "link"} to="/home/">Whishes <span className='tasks-count'>{countAll}</span></NavLink>
      <NavLink className={({isActive}) => isActive ? "link link--active" : "link"} to="/home/active/">Active <span className='tasks-count'>{countActive}</span></NavLink>
      <NavLink className={({isActive}) => isActive ? "link link--active" : "link"} to="/home/completed/">Completed <span className='tasks-count'>{countDone}</span></NavLink>
    </div>
  )
}

export default FilterList