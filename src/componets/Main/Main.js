import React from 'react'
import { Link } from 'react-router-dom'
import "./Main.css"

const Main = () => {
  return (
    <div className='main'>
      <div className='divtab'>
        <h3><Link to={"/slides"} className='link'>Generate Slides</Link></h3>
      </div>
   
    </div>
  )
}

export default Main
