import React, { useState } from 'react'
import "./NavBar.css"
import { IoIosArrowDown } from "react-icons/io"
import { use } from 'react'
function NavBar() {
  const [isDown, setisDown] = useState(false)
  const toggleArrow = () => {
    setisDown((prev) => !prev)
  }
  return (
    <div className='navbar-box'>
      <h1>Biggie</h1>
      <h5>Location</h5>
      <h5>Search for restaurant,cuisine or a dish</h5>
      <div className="accounts" onClick={toggleArrow}>
        <div className="circle"></div>
        <h4>UserName</h4>
        <IoIosArrowDown className={isDown ? "rotateUp" : ""} id='icon' />
      </div>
      <div className="nav-options">
        <h2>Profile</h2>
        <h2>Reviews</h2>
        <h2>Settings</h2>
        <h2>Log out</h2>
      </div>
    </div>
  )
}

export default NavBar