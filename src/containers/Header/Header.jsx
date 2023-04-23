import React from 'react'
import Brand from '../../components/Brand/Brand'
import './header.scss'
import Navbar from '../../components/Navbar/Navbar'

const Header = () => {
  return (
    <>
      <Navbar/>
      <header className='header'>
        <Brand/>
      </header>
    </>
      
  )
}

export default Header