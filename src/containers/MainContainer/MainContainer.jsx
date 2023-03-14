import FilterList from '../../components/FilterList/FilterList'
import TaskInput from '../../components/TaskInput/TaskInput'
import './mainContainer.scss'
import { Outlet } from 'react-router-dom'

const MainContainer = () => {

  return (
      <div className='tasks-section'>
          <TaskInput/>
          <FilterList />
          <Outlet/>
      </div>
  )
}

export default MainContainer