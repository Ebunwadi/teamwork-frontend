import React from 'react'
import styles from './page.module.css'
import image from '../Assets/bro.jpg'

function Main() {
  return (
    <div>
      <div className={styles.right}>
        <p>Connect with your colleagues, <br></br>share information and <br /> yield more result</p>
      </div>

      <div className={styles.left}>
        <img src={image} alt="display" className={styles.img} />
      </div>
    </div>
  )
}

export default Main
