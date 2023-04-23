import React, { useContext, useState } from 'react'
import {MdDeleteForever} from 'react-icons/md'
import {AiFillEdit} from 'react-icons/ai'
import './task.scss'
import { useTasks } from '../../hooks/useTasks'
import { TasksContext } from '../../context/TasksContext'

const Task = ({task}) => {

  const [active, setActive] = useState(task.done);
  const [edit, setEdit] = useState(false);
  const [newText, setNewText] = useState("");

  const { onEdit, onDelete } =  useContext(TasksContext);

  const { deleteTask, editTask } = useTasks()

  const handleActive = async(e) => {
    setActive(e.target.checked);
    editTask(task._id, {done: !task.done})
      .then(() => {
        onEdit(task, {done: !task.done})
      })
      .catch(error => (
        console.log(error)
      ));
  }

  const activeEdit = async() => {
    setEdit(!edit);
    setNewText(task.text);
    editTask(task._id, {isEditing: !task.isEditing})
      .then(() => {
        onEdit(task, {isEditing: !task.isEditing})
      })
      .catch(error => (
        console.log(error)
      ))
  }

  const handleEdit = async(e) => {
    if(e.keyCode === 13) {
      editTask(task._id, {text: newText, isEditing: false})
        .then(() => {
          onEdit(task, {text: newText})
          setEdit(false)
        })
        .catch(error => (
          console.log(error)
        ))
    }
  }

  const handleDelete = async() => {
    deleteTask(task._id)
    .then(() => {
      onDelete(task)
    })
    .catch(error => (
      console.log(error)
    ))
    
  }

  return (
    <div className='task-container'>
      <div className="check_container">
        <input onChange={handleActive} id={`checkbox${task._id}`} defaultChecked={active} className="hidden checkbox-input" type="checkbox"/>
        <label className="checkbox" htmlFor={`checkbox${task._id}`}></label>
      </div>
      {edit 
      ? <input className='task-text task-text--inputEdit' type="text" value={newText} onKeyUp={handleEdit} onChange={(e) => setNewText(e.target.value)}/>
      : <p className={`task-text ${active && "task-text--done"}`}>{task.text}</p>}
      
      <div className='actions-container'>
        <span className='btn-delete' onClick={handleDelete}><MdDeleteForever/></span>
        <span className='btn-edit' onClick={activeEdit}><AiFillEdit/></span>
      </div>
    </div>
  )
}

export default Task