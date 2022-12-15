import React from 'react'
// import '../../pages/Landing-page/'
import './page.css'
import image from './bro.jpg'

function Main() {
  return (
    <div>
      <div className="right">
        <p>Connect with your colleagues, <br></br>share information and <br /> yield more result</p>
      </div>

      <div className="left">
        <img src={image} alt="display" className='img' />
      </div>
    </div>
  )
}

export default Main
