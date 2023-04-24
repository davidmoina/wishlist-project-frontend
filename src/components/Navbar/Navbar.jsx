import React, { useState } from 'react'
import './navbar.scss'
import { useAuth0 } from '@auth0/auth0-react';
import { Link } from 'react-router-dom';

const Navbar = () => {

  const [active, setActive] = useState(false);
  const { logout, user } = useAuth0();

  const handleLogout = () => {
    logout({logoutParams: {returnTo: window.location.origin + "/login"}});
    window.localStorage.removeItem("userId");
  }

  return (
    <nav className="navbar">
      <div onClick={() => setActive(!active)} className="imageContainer">
        <span className='user-name'>{user.name}</span>
        <img src={user.picture } alt="user image" />

        <div className={`menu ${active && "menu--active"}`}>
          <span className='user-name-menu'>{user.name}</span>
          <span className='nav-links'><Link to="/">Home</Link></span>
          <span className='nav-links'><Link to="/profile">Profile</Link></span>
          <button onClick={handleLogout}>Logout</button>
        </div>
      </div>
      
    </nav>
  )
}

export default Navbar