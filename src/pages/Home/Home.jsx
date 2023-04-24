import { Outlet } from 'react-router-dom'
import FilterList from '../../components/FilterList/FilterList'
import TaskInput from '../../components/TaskInput/TaskInput'
import Header from '../../containers/Header/Header'
import MainContainer from '../../containers/MainContainer/MainContainer'
import { useContext, useEffect } from 'react'
import { useUsers } from '../../hooks/useUsers'
import { TasksContext } from '../../context/TasksContext'

const Home = () => {

  const { checkUser } = useUsers();
  const { setUserId } = useContext(TasksContext);

  useEffect(() => {
    checkUser()
    .then((data) => (
      setUserId(data)
    ));
  }, [])
  
  return (
    <>
      <Header brand/>
      <MainContainer>
        <Outlet/>
      </MainContainer>
    </>
  )
}

export default Home