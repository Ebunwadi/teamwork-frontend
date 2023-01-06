import React, { useState, useEffect } from 'react'
import styles from './login.module.css'
import emailIcon from '../Assets/email.jpg'
import { forgotPassword, reset } from '../../reduxToolKit/features/authSlice';
import {useNavigate} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from 'react-toastify'
import Spinner from '../loadingSpinner/Spinner'


function ForgetPassword() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const initialForm = {
    email: '',
  }
  const [form, setForm] = useState(initialForm)
  const handleChange = (e) => {
    setForm({
      [e.target.name] : e.target.value
  })
  }
  const { isLoading, isError, isSuccess, errorMsg } = useSelector(
    (state) => state.auth
  )
  useEffect(() => {
    if (isError) {
      toast.error(`Error: ${errorMsg}`)
    }

    if (isSuccess) {
      toast.success('A password reset link has been sent to your email.')
      navigate('/login')
    }

    dispatch(reset())
  }, [isError, isSuccess, errorMsg, navigate, dispatch])
  
  const handleSubmit = async (e) => {
    e.preventDefault()
    dispatch(forgotPassword(form))
    }

    if (isLoading) {
      return <Spinner />
    }

  return (
    <div className={styles.container}>
      <form className={styles.login} onSubmit={handleSubmit}>
        <br /><br /><br />
        <br /><br /><br />
        <div className={styles.input}>
          <input 
            type="email" 
            placeholder="Enter your email" 
            className={styles.email} 
            // autoComplete = 'off'
            name='email'
            value={form.email}
            onChange={handleChange}
            required
          />
          <img src={emailIcon} alt="emailIcon" className={styles.emailIcon} />
        </div>
        <button className={`${styles.input} ${styles.btn}`} type = 'submit'>Recover Password</button>
      </form>
    </div>
  )
}

export default ForgetPassword
