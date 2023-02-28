import React from 'react'
import './header.scss'

const Header = ({children}) => {
  return (
    <header className='header'>
      {children}
    </header>
  )
}

export default Header