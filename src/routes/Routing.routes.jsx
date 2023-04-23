import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ItemList from '../components/ItemList/ItemList'
import NotFound from '../pages/NotFound/NotFound'
import { Login } from '../pages/Login/Login'
import Home from '../pages/Home/Home'
import { useAuth0 } from '@auth0/auth0-react'
import { PrivateRoutes } from '../components/PrivateRoutes/PrivateRoutes'

const Routing= () => {

  const { isLoading  } = useAuth0();

  if(isLoading) return <h1>Loading...</h1>

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PrivateRoutes/>}>
          <Route path='/' element={<Home/>} >
            <Route index element={<ItemList/>}/>
            <Route path='/:status' element={<ItemList/>}/>
          </Route>
        </Route>
        <Route path='/welcome' element={<Login/>} />
        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default Routing