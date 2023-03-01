import React from 'react'
import Brand from '../../components/Brand/Brand'
import Navbar from '../../components/Navbar/Navbar'
import './header.scss'

const Header = () => {
  return (
    <header className='header'>
      {/* <Navbar/> */}
      <Brand/>
    </header>
  )
}

export default Header