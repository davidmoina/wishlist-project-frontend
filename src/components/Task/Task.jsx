import React, { useState } from 'react'
import {MdDeleteForever} from 'react-icons/md'
import {AiFillEdit} from 'react-icons/ai'
import './task.scss'

const Task = ({task, toggleComplete, onDelete, onEdit, toggleEditing}) => {

  const [active, setActive] = useState(task.done);
  const [edit, setEdit] = useState(false);
  const [newText, setNewText] = useState("");

  const handleActive = (e) => {
    setActive(e.target.checked)
    toggleComplete(task);
  }

  const activeEdit = () => {
    setEdit(!edit);
    setNewText(task.text);
    toggleEditing(task)
  }

  const editTask = (e) => {
    if(e.keyCode === 13) {
      setEdit(false);
      
      onEdit(task, newText)
      toggleEditing(task);
    }
  }

  return (
    <div className='task-container'>
      <div className="check_container">
        <input onChange={handleActive} id={`checkbox${task.id}`} defaultChecked={active} className="hidden checkbox-input" type="checkbox"/>
        <label className="checkbox" htmlFor={`checkbox${task.id}`}></label>
      </div>
      {edit 
      ? <input className='task-text task-text--inputEdit' type="text" value={newText} onKeyUp={editTask} onChange={(e) => setNewText(e.target.value)}/>
      : <p className={`task-text ${active && "task-text--done"}`}>{task.text}</p>}
      
      <div className='actions-container'>
        <span className='btn-delete' onClick={() => onDelete(task)}><MdDeleteForever/></span>
        <span className='btn-edit' onClick={activeEdit}><AiFillEdit/></span>
      </div>
    </div>
  )
}

export default Task