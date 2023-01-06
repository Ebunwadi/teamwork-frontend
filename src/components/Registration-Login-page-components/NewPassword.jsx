import React, {useState, useEffect} from 'react'
import styles from './login.module.css'
import {RiLockPasswordLine} from 'react-icons/ri'
import {AiOutlineEye} from 'react-icons/ai'
import {AiOutlineEyeInvisible} from 'react-icons/ai'
import { toast } from 'react-toastify'
import { ResetPassword, reset } from '../../reduxToolKit/features/authSlice';
import {useNavigate} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Spinner from '../loadingSpinner/Spinner'

function NewPassword() {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [isShown, setIsShown] = useState(false);
  const [isPasswordShown, setIsPasswordShown] = useState(false);
  const initialForm = {
    password: '',
    confirmPassword: '',
  }
  const [form, setForm] = useState(initialForm)
  const handleChange = (e) => {
    setForm({
      ...form,
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
      toast.success('Password Successfully Updated.')
      navigate('/login')
    }

    dispatch(reset())
  }, [isError, isSuccess, errorMsg, navigate, dispatch])

  const handleSubmit = async (e) => {
    e.preventDefault()
    if(form.password !== form.confirmPassword) {
      toast.error('passwords do not match!')
    }
    dispatch(ResetPassword(form))
      
    }

    if (isLoading) {
      return <Spinner />
    }

  return (
    <div className={styles.container}>
      <form className={styles.login} autoComplete = 'off' onSubmit={handleSubmit}>
        <br /><br /><br />
        <br /><br /><br />
        <div className={styles.input}>
          <input 
            type={isShown? 'text': 'password'} 
            placeholder="Enter your new password" 
            className={styles.email} 
            // autoComplete = 'off'
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
        <br /><br /><br />
          <br /><br />
          {/* confirm password */}
        <div className={styles.input}>
          <input 
            type={isPasswordShown? 'text': 'password'} 
            placeholder="Confirm Password" 
            className={styles.password} 
            autoComplete = 'off'
            name='confirmPassword'
            value={form.confirmPassword}
            onChange={handleChange}
            onPaste={(e)=>{
              e.preventDefault()
              return false;
            }}
          />
          <RiLockPasswordLine className={styles.passwordIcon} />
          <div
            onClick={() => {setIsPasswordShown(!isPasswordShown)}} 
            className = {styles.eyeButton}> {isPasswordShown? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
          </div>
        </div>
        <br /><br /><br />
        <br /><br /><br />
        <button className={`${styles.input} ${styles.btn}`} type = 'submit'>Reset Password</button>
      </form>
    </div>
  )
}

export default NewPassword