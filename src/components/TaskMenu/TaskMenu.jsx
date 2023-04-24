import './taskMenu.scss'
import { MdArchive, MdDelete, MdEdit } from 'react-icons/md'

export const TaskMenu = ({handleDelete, activeEdit, handleArchive}) => {
    return (
        <div className='task-menu-container'>
            <ul className='task-menu-list'>
                <li onClick={activeEdit}><MdEdit/> Edit</li>
                <li onClick={handleDelete}><MdDelete/> Delete</li>
                <li onClick={handleArchive}><MdArchive/> Archive</li>
            </ul>
        </div>
    )
}
