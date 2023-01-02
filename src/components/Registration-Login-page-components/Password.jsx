import React, {useState} from 'react'
import styles from './login.module.css'
import {RiLockPasswordLine} from 'react-icons/ri'
import {AiOutlineEye} from 'react-icons/ai'
import {AiOutlineEyeInvisible} from 'react-icons/ai'
import {useNavigate, useParams} from "react-router-dom";
import { useForm } from "react-hook-form";

function Password() {
  const navigate = useNavigate();
  const params = useParams();
  const [isShown, setIsShown] = useState(false);
  const [isPasswordShown, setIsPasswordShown] = useState(false);
  // const initialForm = {
  //   password: '',
  //   confirmPassword: ''
  // }
  // const [form, setForm] = useState(initialForm)
  // const handleChange = (e) => {
  //   setForm({
  //     ...form,
  //     [e.target.name] : e.target.value
  // })
  // }

  // handle form events
  const { register, watch, formState: { errors } } = useForm({
    mode:'onTouched'
});

const password = watch('password')

  const handleSubmit = async (e) => {
    e.preventDefault()
      const res = await fetch(`https://ebubeproject.onrender.com/api/v1/auth/reset-password/${params.id}/${params.token}`, {
      method: "PATCH",
      mode: 'no-cors',
      body: JSON.stringify(password),
      headers: {
        "content-type": "application/json",
      },
    });

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
            placeholder="Enter your new password" 
            className={styles.email} 
            autoComplete = 'off'
            name='password'
            // value={form.password}
            // onChange={handleChange}
            {...register("password", { required: 'Password is required',
              pattern:{
                // eslint-disable-next-line
                // value:/^(\S)(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z])(?=.*[~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_₹])[a-zA-Z0-9~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_₹]{10,16}$/,
                // message:'Password should include at least one uppercase, one numeric value and one special character'
              },
              minLength:{
                value:4,
                message:'Minimum Required length is 4'
              },
              maxLength: {
                value: 20,
                message: "Maximum Required length is 20",
                },
            })}
          />
          <RiLockPasswordLine className={styles.passwordIcon} />
          <div
            onClick={() => {setIsShown(!isShown)}} 
            className = {styles.eyeButton}> {isShown? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
          </div>
        </div>
        <br /><br /><br />
        {errors.password && <span className={styles.passwordError}>{errors.password.message}</span>}
          <br /><br />
          {/* confirm password */}
        <div className={styles.input}>
          <input 
            type={isPasswordShown? 'text': 'password'} 
            placeholder="Confirm Password" 
            className={styles.password} 
            autoComplete = 'off'
            name='password'
            // value={form.confirmPassword}
            // onChange={handleChange}
            onPaste={(e)=>{
              e.preventDefault()
              return false;
            }}
            {...register("confirmPassword", { required: 'confirm password is required',
              validate: (value) =>
              value === password || "The passwords do not match",
            })}
          />
          <RiLockPasswordLine className={styles.passwordIcon} />
          <div
            onClick={() => {setIsPasswordShown(!isPasswordShown)}} 
            className = {styles.eyeButton}> {isPasswordShown? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
          </div>
        </div>
        <br /><br /><br />
        {errors.confirmPassword && <span className={styles.passwordError}>{errors.confirmPassword.message}</span>}
        <br /><br /><br />
        <button className={`${styles.input} ${styles.btnn}`} type = 'submit'>Reset Password</button>
      </form>
    </div>
  )
}

export default Password
