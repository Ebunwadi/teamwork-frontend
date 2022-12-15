import React from 'react'
// import '../../pages/landing-page/navbar.css'
import styles from './navbar.module.css'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className={styles.navbar}>
      <span className={styles.staffcon}> STAFFCONN</span>
      <Link to='/' className={styles.home}><span>Home</span></Link>
      <Link to='/upload' className={styles.upload}><span>Upload</span></Link>
      <Link to='/notify' className={styles.notify}><span>Notification</span></Link>
      <Link to='/profile' className={styles.profile}><span>Profile</span></Link>
      <Link to='/login' className={styles.login}><span className={styles.loginText}>Login</span></Link>
    </div>
  )
}

export default Navbar
