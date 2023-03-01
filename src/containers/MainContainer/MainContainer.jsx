import React, { useEffect, useState } from 'react'
import FilterList from '../../components/FilterList/FilterList'
import ItemList from '../../components/ItemList/ItemList'
import TaskInput from '../../components/TaskInput/TaskInput'
import './mainContainer.scss'
import { collection, query, onSnapshot, doc, updateDoc, deleteDoc } from 'firebase/firestore'
import { db } from '../../Firebase/config'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ActiveTasks from '../../pages/ActiveTasks/ActiveTasks'
import NotFound from '../../pages/NotFound/NotFound'
import CompleteTasks from '../../pages/CompleteTasks/CompleteTasks'

const MainContainer = () => {
  const [allTasks, setAllTasks] = useState([]);
  const [completedTasks, setCompletedTasks] = useState([]);
  const [activeTasks, setActiveTasks] = useState([])

  useEffect(() => {
    const q = query(collection(db, "tasks"));

    const dataFb = onSnapshot(q, (querySnapshot) => {
      const tasksArray = [];
      querySnapshot.forEach((doc) => {
        tasksArray.push({...doc.data(), id: doc.id})
      });
      setAllTasks(tasksArray);
      setCompletedTasks(tasksArray.filter(item => item.done === true));
      setActiveTasks(tasksArray.filter(item => item.done === false))
    })
    console.log("get data function executed")
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

  const toggleEditing = async(task) => {
    await updateDoc(doc(db, "tasks", task.id), {
      isEditing: !task.isEditing
    })
  }

  const handleDelete = async(id) => {
    await deleteDoc(doc(db, "tasks", id));
  }

  const tasksCount = () => allTasks.length;
  const completeCount = () => completedTasks.length;
  const activeCount = () => activeTasks.length;

  return (
    <BrowserRouter>
      <div className='tasks-section'>
          <TaskInput/>
          <FilterList tasksCount={tasksCount} completeCount={completeCount} activeCount={activeCount} />
          <Routes>
            <Route path='/' element={<ItemList toggleEditing={toggleEditing} allTasks={allTasks} toggleComplete={toggleComplete} handleEdit={handleEdit} handleDelete={handleDelete} />}/>
            <Route path='/active' element={<ActiveTasks toggleEditing={toggleEditing} activeTasks={activeTasks} toggleComplete={toggleComplete} handleEdit={handleEdit} handleDelete={handleDelete}/>}/>
            <Route path='/completed' element={<CompleteTasks toggleEditing={toggleEditing} completedTasks={completedTasks} toggleComplete={toggleComplete} handleEdit={handleEdit} handleDelete={handleDelete}/>}/>
            <Route path='*' element={<NotFound/>}/>
          </Routes>
      </div>
    </BrowserRouter>
  )
}

export default MainContainer