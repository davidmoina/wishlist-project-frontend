import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ItemList from '../components/ItemList/ItemList'
import NotFound from '../pages/NotFound/NotFound'
import { Login } from '../pages/Login/Login'
import Home from '../pages/Home/Home'
import { useAuth0 } from '@auth0/auth0-react'
import { PrivateRoutes } from '../components/PrivateRoutes/PrivateRoutes'
import { Profile } from '../pages/Profile/Profile'
import { CustomLoader } from '../components/CustomLoader/CustomLoader'

const Routing= () => {

  const { isLoading  } = useAuth0();

  if(isLoading) return <CustomLoader/>

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PrivateRoutes/>}>
          <Route path='/' element={<Home/>} >
            <Route index element={<ItemList/>}/>
            <Route path=':status' element={<ItemList/>}/>
          </Route>
          <Route path='profile' element={<Profile/>} />
        </Route>
        <Route path='/login' element={<Login/>} />
        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default Routing