import { Outlet } from 'react-router-dom'
import FilterList from '../../components/FilterList/FilterList'
import TaskInput from '../../components/TaskInput/TaskInput'
import Header from '../../containers/Header/Header'
import MainContainer from '../../containers/MainContainer/MainContainer'
import { useEffect } from 'react'
import { useUsers } from '../../hooks/useUsers'
import { useState } from 'react'

const Home = () => {

  const { checkUser } = useUsers();

  useEffect(() => {
    checkUser();
  }, [])
  
  
  return (
    <>
      <Header/>
      <MainContainer>
        <TaskInput/>
        <FilterList />
        <Outlet/>
      </MainContainer>
    </>
  )
}

export default Home