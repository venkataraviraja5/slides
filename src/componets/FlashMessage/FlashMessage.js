import React from 'react'
import "./FlashMessage.css"

const FlashMessage = ({booleanValue}) => {
  return (
    <div>
      
         {
            booleanValue ? 
              <p className='string'>Enter Valid String</p>
              :
              null
         }
   
    </div>
  )
}

export default FlashMessage
