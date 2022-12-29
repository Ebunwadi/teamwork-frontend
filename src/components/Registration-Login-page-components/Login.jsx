import React, {useState} from 'react'
import styles from './login.module.css'
import emailIcon from '../Assets/email.jpg'
import {RiLockPasswordLine} from 'react-icons/ri'
import {AiOutlineEye} from 'react-icons/ai'
import {AiOutlineEyeInvisible} from 'react-icons/ai'
import Cookie from 'js-cookie'
import {Link, useNavigate} from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUser } from "../../store/auth";


function Login() {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  //for password eye icon toggle
  const [isShown, setIsShown] = useState(false);
  //login error message
  const [errormsg, setErrormsg] = useState({
    isError: false,
    error: ''
  })

  const initialForm = {
    email: '',
    password: ''
  }
  const [form, setForm] = useState(initialForm)
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name] : e.target.value
  })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
      const res = await fetch('https://ebubeproject.onrender.com/api/v1/auth/login-user', {
      method: "POST",
      body: JSON.stringify(form),
      headers: {
        "content-type": "application/json",
      },
    });
    const feedback = await res.json();

    if (res.ok) {
    const {token, payload} = feedback.data
      Cookie.set("token", token);
      dispatch(setUser(payload));
      navigate("/dashboard");        
    }  else {
      const {error} = feedback
      setErrormsg({
        isError: true,
        error: `error: ${error}!`
      })
    }

  } 
  return (
    <div className={styles.container}>
      {/* <h1>STAFFCON</h1> */}
      {errormsg.isError && <h1>{errormsg.error}</h1>}
      <form className={styles.login} autoComplete = 'off' onSubmit={handleSubmit}>
        <br /><br />
        <div className={styles.input}>
          <input 
            type="email" 
            placeholder="Email" 
            className={styles.email} 
            autoComplete = 'off'
            name='email'
            value={form.email}
            onChange={handleChange}
          />
          <img src={emailIcon} alt="emailIcon" className={styles.emailIcon} />
        </div>
        <br /><br /> <br /><br />
        <div className={styles.input}>
          <input 
            type={isShown? 'text': 'password'} 
            placeholder="Password" 
            className={styles.password} 
            autoComplete = 'off'
            name='password'
            value={form.password}
            onChange={handleChange}
          />
          <RiLockPasswordLine className={styles.passwordIcon} />
          <div
            onClick={() => {setIsShown(!isShown)}} 
            className = {styles.eyeButton}> {isShown? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
          </div>
        </div>
        <button className={`${styles.input} ${styles.btn}`} type = 'submit'>LOG IN</button>
        <Link to='/forgotPassword' className={styles.p}>Forgot Password?</Link>
        <button className={`${styles.input} ${styles.signIn}`}>New user? Contact Admin to sign you in </button>
      </form>
    </div>
  )
}

export default Login
