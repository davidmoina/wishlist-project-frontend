import React from 'react'
import Brand from '../../components/Brand/Brand'
import './header.scss'
import Navbar from '../../components/Navbar/Navbar'
import { UserAvatar } from '../../components/UserAvatar/UserAvatar'

const Header = ({brand}) => {
  return (
    <>
      <Navbar/>
      <header className='header'>
        {
          brand 
          ? <Brand/>
          : <UserAvatar/>
          
        }
      </header>
    </>
      
  )
}

export default Header