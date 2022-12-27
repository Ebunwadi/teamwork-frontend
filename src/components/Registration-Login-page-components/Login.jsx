import React, {useState} from 'react'
import styles from './login.module.css'
import emailIcon from '../Assets/email.jpg'
import {RiLockPasswordLine} from 'react-icons/ri'
import {AiOutlineEye} from 'react-icons/ai'
import {AiOutlineEyeInvisible} from 'react-icons/ai'


function Login() {
  const [isShown, setIsShown] = useState(false);
  return (
    <div className={styles.container}>
      {/* <h1>STAFFCON</h1> */}
      <form className={styles.login} autoComplete = 'off'>
        <br /><br />
        <div className={styles.input}>
          <input type="email" placeholder="Email" className={styles.email} autoComplete = 'new-password'/>
          <img src={emailIcon} alt="emailIcon" className={styles.emailIcon} />
        </div>
        <br /><br /> <br /><br />
        <div className={styles.input}>
          <input type={isShown? 'text': 'password'} placeholder="Password" className={styles.password} 
          autoComplete = 'new-password'/>
          <RiLockPasswordLine className={styles.passwordIcon} />
          <div
            onClick={() => {setIsShown(!isShown)}} 
            className = {styles.eyeButton}> {isShown? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
          </div>
        </div>
        <button className={`${styles.input} ${styles.btn}`}>LOG IN</button>
        <p className={styles.p}>forgot password?</p>
        <button className={`${styles.input} ${styles.signIn}`}>New user? Sign In </button>
      </form>
    </div>
  )
}

export default Login
