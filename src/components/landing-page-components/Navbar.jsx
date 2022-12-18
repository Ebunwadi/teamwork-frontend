import React, {useState} from 'react'
import styles from './navbar.module.css'
import { Link } from 'react-router-dom'
import { GiHamburgerMenu } from 'react-icons/gi'
import { FaTimes } from 'react-icons/fa'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className={styles.navbar}>
      <span className={styles.staffcon}> STAFFCONN</span>
      <div className={`${isOpen? styles.open : styles.navItems}`}>
        <Link to='/' className={styles.home}><span>Home</span></Link>
        <Link to='/upload' className={styles.upload}><span>Upload</span></Link>
        <Link to='/notify' className={styles.notify}><span>Notification</span></Link>
        <Link to='/profile' className={styles.profile}><span>Profile</span></Link>
        <Link to='/login' className={styles.login}><span className={styles.loginText}>Login</span></Link>
      </div>
      <button 
        onClick={() => {setIsOpen(!isOpen)}} 
        className = {styles.button}> {isOpen? <FaTimes /> : <GiHamburgerMenu />}
      </button>
    </div>
  )
}

export default Navbar
