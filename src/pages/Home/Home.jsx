import { Outlet } from 'react-router-dom'
import Header from '../../containers/Header/Header'
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
      <Header/>
      <Outlet/>
    </>
  )
}

export default Home