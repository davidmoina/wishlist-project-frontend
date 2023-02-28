import React, { useState } from 'react'
import {MdDeleteForever, MdEditNote} from 'react-icons/md'
import './task.scss'

const Task = ({task, toggleComplete, handleDelete, handleEdit}) => {

  const [active, setActive] = useState(task.done)

  const handleActive = (e, item) => {
    setActive(e.target.checked)
    toggleComplete(task);
  }

  return (
    <div className='task-container'>
      <div className="check_container">
        <input onChange={handleActive} id={`checkbox${task.id}`} defaultChecked={active} className="hidden checkbox-input" type="checkbox"/>
        <label className="checkbox" htmlFor={`checkbox${task.id}`}></label>
      </div>
      <p className={`task-text ${active && "task-text--done"}`}>{task.text}</p>
      <div className='actions-container'>
        <span><MdDeleteForever/></span>
        <span><MdEditNote/></span>
      </div>
    </div>
  )
}

export default Task