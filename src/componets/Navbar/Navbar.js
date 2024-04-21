import React from 'react'
import "../Navbar/Navbar.css"
import { Outlet } from 'react-router-dom'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
       <div className='navbar'>
         <Link to={"/"} className='link'><h1>Slides</h1></Link>
       </div>
       <Outlet />
    </div>
  )
}

export default Navbar
