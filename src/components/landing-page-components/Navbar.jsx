import React, {useState} from 'react'
import styles from './navbar.module.css'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { GiHamburgerMenu } from 'react-icons/gi'
import { FaTimes } from 'react-icons/fa'
import { reset, logout } from '../../reduxToolKit/features/authSlice'

function Navbar() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { userData } = useSelector((state) => state.auth)

  const onLogout = () => {
    dispatch(logout())
    dispatch(reset())
    navigate('/login')
  }
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className={styles.navbar}>
      <span className={styles.staffcon}> STAFFCONN</span>
      <div className={`${isOpen? styles.open : styles.navItems}`}>
        <Link to='/' className={styles.home}><span>Home</span></Link>
        <Link to='/upload' className={styles.upload}><span>Upload</span></Link>
        <Link to='/notify' className={styles.notify}><span>Notification</span></Link>
        <Link to='/profile' className={styles.profile}><span>Profile</span></Link>
        {userData?
        <Link to='/login' className={styles.login}><span className={styles.loginText} onClick={onLogout}>Logout</span></Link>
        :<Link to='/login' className={styles.login}><span className={styles.loginText}>Login</span></Link>
      }
      </div>
      <button 
        onClick={() => {setIsOpen(!isOpen)}} 
        className = {styles.button}> {isOpen? <FaTimes /> : <GiHamburgerMenu />}
      </button>
    </div>
  )
}

export default Navbar
