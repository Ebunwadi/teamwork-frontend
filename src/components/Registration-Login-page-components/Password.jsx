import React, {useState} from 'react'
import styles from './login.module.css'
import {RiLockPasswordLine} from 'react-icons/ri'
import {AiOutlineEye} from 'react-icons/ai'
import {AiOutlineEyeInvisible} from 'react-icons/ai'
import {useNavigate} from "react-router-dom";
import { useSelector } from "react-redux";

function Password() {
  const token = useSelector((state) => state.auth.token)
  const id = useSelector((state) => state.auth.user)
  const navigate = useNavigate();
  const [isShown, setIsShown] = useState(false);
  const initialForm = {
    password: '',
    confirmPassword: ''
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
      const res = await fetch(`https://ebubeproject.onrender.com/api/v1/auth/reset-password/${id}/${token}`, {
      method: "PATCH",
      body: JSON.stringify(form),
      headers: {
        "content-type": "application/json",
      },
    });
  console.log(token, id);

    const feedback = await res.json();
    console.log(feedback);
    if (res.ok){
      const {message} = feedback.data
      if(window.confirm(`${message}`)) {
        navigate('/login')
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
            type={isShown? 'text': 'password'} 
            placeholder="Enter your new passwoerd" 
            className={styles.email} 
            autoComplete = 'off'
            name='password'
            value={form.password}
            onChange={handleChange}
            required
          />
          <RiLockPasswordLine className={styles.passwordIcon} />
          <div
            onClick={() => {setIsShown(!isShown)}} 
            className = {styles.eyeButton}> {isShown? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
          </div>
        </div>
          <br /><br /> <br /><br />
        <div className={styles.input}>
          <input 
            type={isShown? 'text': 'password'} 
            placeholder="Confirm Password" 
            className={styles.password} 
            autoComplete = 'off'
            name='password'
            value={form.confirmPassword}
            onChange={handleChange}
          />
          <RiLockPasswordLine className={styles.passwordIcon} />
          <div
            onClick={() => {setIsShown(!isShown)}} 
            className = {styles.eyeButton}> {isShown? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
          </div>
        </div>
        <button className={`${styles.input} ${styles.btn}`} type = 'submit'>Reset Password</button>
      </form>
    </div>
  )
}

export default Password
