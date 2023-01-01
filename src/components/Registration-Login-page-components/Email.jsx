import React, { useState } from 'react'
import styles from './login.module.css'
import emailIcon from '../Assets/email.jpg'
import {useNavigate} from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUser, setToken } from "../../store/auth";



function Email() {
  const dispatch = useDispatch()
  const navigate = useNavigate();
  const initialForm = {
    email: '',
  }
  const [form, setForm] = useState(initialForm)
  const handleChange = (e) => {
    setForm({
      [e.target.name] : e.target.value
  })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
      const res = await fetch('https://ebubeproject.onrender.com/api/v1/auth/forgot-password', {
      method: "POST",
      body: JSON.stringify(form),
      headers: {
        "content-type": "application/json",
      },
    });

    const feedback = await res.json();
    if (res.ok){
      if(window.confirm('A password reset link has been sent to your email')) {
        const { token, id } = feedback.data
        dispatch(setUser(id));
        dispatch(setToken(token));
        navigate('/')
      }
    }else {
      const {error} = feedback;
      alert(error);
    }
    }
  return (
    <div>
      <form className={styles.login} autoComplete = 'off' onSubmit={handleSubmit}>
        <br /><br /><br />
        <br /><br /><br />
        <div className={styles.input}>
          <input 
            type="email" 
            placeholder="Enter your email" 
            className={styles.email} 
            autoComplete = 'off'
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

export default Email
