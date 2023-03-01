import React, { useState } from 'react'
import { addDoc, collection } from "firebase/firestore";
import { db } from '../../Firebase/config';
import './taskInput.scss'
import {IoIosAddCircleOutline} from 'react-icons/io'
import {BiMessageAltError} from 'react-icons/bi'

const TaskInput = () => {

  const [taskText, setTaskText] = useState("");
  const [error, setError] = useState(false)

  const handleChange = (e) => {
    const text = e.target.value;
    setTaskText(text)

    if(text.length > 1) {
      setError(false)
    }
  }

  const handleAdd = async(e) => {
    e.preventDefault()

    if(taskText !== "") {
      try {
        await addDoc(collection(db, "tasks"), {
          text: taskText,
          done: false,
          isEditing: false,
          collection: ""
        });

        setTaskText("");
      } catch (e) {
        console.error("Error adding document: ", e);
      }
    } else {
      setError(true)
    }
  }

  return (
    <form onSubmit={handleAdd} className='form'>
      <input className='form__input' value={taskText} name='text' onChange={handleChange} type="text" placeholder='Type something'/>
      <button className='form__button' type='submit'>Add <IoIosAddCircleOutline style={{ fill: 'white', fontSize: 'inherit' }}/></button>
      {error && <p className='error-text'><BiMessageAltError />  Please enter something</p>}
    </form>
  )
}

export default TaskInput