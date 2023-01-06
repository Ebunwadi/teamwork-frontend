import React, {useState, useEffect} from 'react'
import styles from './login.module.css'
import emailIcon from '../Assets/email.jpg'
import {RiLockPasswordLine} from 'react-icons/ri'
import {AiOutlineEye} from 'react-icons/ai'
import {AiOutlineEyeInvisible} from 'react-icons/ai'
import {Link, useNavigate} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from 'react-toastify'
import { login, reset } from "../../reduxToolKit/features/authSlice";
import Spinner from '../loadingSpinner/Spinner'


function Login() {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  //for password eye icon toggle
  const [isShown, setIsShown] = useState(false);

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

  
  const { userData, isLoading, isError, isSuccess, errorMsg } = useSelector(
    (state) => state.auth
  )

  useEffect(() => {
    if (isError) {
      toast.error(`Error: ${errorMsg}!`)
    }

    if (isSuccess) {
      navigate('/dashboard')
    }

    dispatch(reset())
  }, [userData, isError, isSuccess, errorMsg, navigate, dispatch])

  const handleSubmit = async (e) => {
    e.preventDefault()
     
    dispatch(login(form))
  } 

  if (isLoading) {
    return <Spinner />
  }

  return (
    <div className={styles.container}>
      <form className={styles.login} onSubmit={handleSubmit}>
        <br /><br />
        <div className={styles.input}>
          <input 
            type="email" 
            placeholder="Email" 
            className={styles.email} 
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
