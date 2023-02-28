import React, { useEffect, useState } from 'react'
import FilterList from '../../components/FilterList/FilterList'
import ItemList from '../../components/ItemList/ItemList'
import TaskInput from '../../components/TaskInput/TaskInput'
import './mainContainer.scss'
import { collection, query, onSnapshot, doc, updateDoc, deleteDoc } from 'firebase/firestore'
import { db } from '../../Firebase/config'

const MainContainer = () => {
  const [allTasks, setAllTasks] = useState([])

  useEffect(() => {
    const q = query(collection(db, "tasks"));

    const dataFb = onSnapshot(q, (querySnapshot) => {
      const tasksArray = [];
      querySnapshot.forEach((doc) => {
        tasksArray.push({...doc.data(), id: doc.id})
      });
      setAllTasks(tasksArray);
    })
    console.log("funcion obtener datos ejecutada")
    return () => dataFb()
  }, [])

  const handleEdit = async(task, text) => {
    await updateDoc(doc(db, "tasks", task.id), {
      text: text
    })
  }

  const toggleComplete = async(task) => {
    await updateDoc(doc(db, "tasks", task.id), {
      done: !task.done
    })
  }

  const handleDelete = async(id) => {
    await deleteDoc(doc(db, "tasks", id));
  }

  const tasksCount = () => allTasks.length;

  return (
    <main className='main-container'>
      <div className='tasks-section'>
        <TaskInput/>
        <FilterList tasksCount={tasksCount}/>
        <ItemList allTasks={allTasks} toggleComplete={toggleComplete} handleEdit={handleEdit} handleDelete={handleDelete} />
      </div>
    </main>
  )
}

export default MainContainer