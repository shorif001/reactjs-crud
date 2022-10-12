import React from 'react'
import { NavLink } from 'react-router-dom';
import './Navbar.css';
import logo from '../../Assets/Images/logo.png'

const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <div className="navbar-field">
          <NavLink to="/">Login</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/content">Content</NavLink>
          <NavLink to="/userlist">User List</NavLink>
        </div>
      </div>
    </>
  )
}

export default Navbar