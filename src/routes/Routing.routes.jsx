import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ItemList from '../components/ItemList/ItemList'
import Header from '../containers/Header/Header'
import MainContainer from '../containers/MainContainer/MainContainer'
import NotFound from '../pages/NotFound/NotFound'
import { Login } from '../pages/Login/Login'

const Routing= () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainContainer/>} >
          <Route index element={<ItemList/>}/>
          <Route path='/:status' element={<ItemList/>}/>
        </Route>
        <Route path='/login' element={<Login/>} />
        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default Routing