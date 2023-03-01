import React from 'react'
import './emptyMessage.scss'
import {HiOutlineClipboardList} from 'react-icons/hi'

const EmptyMessage = () => {
  return (
    <div className='empty-container'>
      <HiOutlineClipboardList size={80}/>
      <p>You don't have any tasks registered yet<br/>
      Create tasks and organize your to-dos</p>
    </div>
  )
}

export default EmptyMessage