import React, { useState } from 'react'
import './navbar.scss'
import { useAuth0 } from '@auth0/auth0-react';

const Navbar = () => {

  const [active, setActive] = useState(false);
  const { logout } = useAuth0();

  const handleLogout = () => {
    logout({logoutParams: {returnTo: window.location.origin + "/login"}});
    window.localStorage.removeItem("userId");
  }

  return (
    <nav className="navbar">
      <h4>Logo</h4>
      <div onClick={() => setActive(!active)} className="imageContainer">
        <img src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50" alt="" />

        <div className={`menu ${active && "menu--active"}`}>
          <span>Profile</span>
          <button onClick={handleLogout}>Logout</button>
        </div>
      </div>
      
    </nav>
  )
}

export default Navbar