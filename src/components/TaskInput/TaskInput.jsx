import React, { useContext, useState } from 'react'
import './taskInput.scss'
import {IoIosAddCircleOutline} from 'react-icons/io'
import {BiMessageAltError} from 'react-icons/bi'
import { TasksContext } from '../../context/TasksContext';
import { useTasks } from '../../hooks/useTasks';

const TaskInput = () => {

  const [taskText, setTaskText] = useState("");
  const [error, setError] = useState(false);

  const { setData } = useContext(TasksContext);
  const { addTask, getTasks } = useTasks();

  const handleChange = (e) => {
    const text = e.target.value;
    setTaskText(text)

    if(text.length > 1) {
      setError(false)
    }
  }

  const handleSubmit = async(e) => {
    e.preventDefault();

    if(!error) {
      addTask(taskText);
      const tasks = await getTasks()
      setData(tasks)
      setTaskText("");
    };
    

  }

  return (
    <form onSubmit={handleSubmit} className='form'>
      <input className='form__input' value={taskText} name='text' onChange={handleChange} type="text" placeholder='Type something'/>
      <button className='form__button' type='submit'>Add <IoIosAddCircleOutline style={{ fill: 'white', fontSize: 'inherit' }}/></button>
      {error && <p className='error-text'><BiMessageAltError />  Please enter something</p>}
    </form>
  )
}

export default TaskInput