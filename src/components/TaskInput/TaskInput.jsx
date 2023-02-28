import React, { useState } from 'react'
import { addDoc, collection } from "firebase/firestore";
import { db } from '../../Firebase/config';
import './taskInput.scss'
import {IoIosAddCircleOutline} from 'react-icons/io'

const TaskInput = () => {

  const [taskText, setTaskText] = useState("");

  const handleChange = (e) => {
    const text = e.target.value;
    setTaskText(text)
  }

  const handleAdd = async(e) => {
    e.preventDefault()

    if(taskText.text !== "") {
  
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
    }

  }

  return (
    <form onSubmit={handleAdd} className='form'>
      <input className='form__input' value={taskText} name='text' onChange={handleChange} type="text" />
      <button className='form__button' type='submit'>Add <IoIosAddCircleOutline style={{ fill: 'white', fontSize: 'inherit' }}/></button>
    </form>
  )
}

export default TaskInput