import React from 'react'
// import '../../pages/landing-page/navbar.css'
import './navbar.css'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className='navbar'>
      <span className='staffcon'> STAFFCONN</span>
      <Link to='/' className='home'><span>Home</span></Link>
      <Link to='/upload' className='upload'><span>Upload</span></Link>
      <Link to='/notify' className='notify'><span>Notification</span></Link>
      <Link to='/profile' className='profile'><span>Profile</span></Link>
      <Link to='/login' className='login'><span className='login-text'>Login</span></Link>
    </div>
  )
}

export default Navbar
