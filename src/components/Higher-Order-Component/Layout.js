import React from 'react'
import Navbar from '../landing-page-components/Navbar'
import styles from './layout.module.css'

function Layout({children}) {
  return (
    <div className={styles.layout}>
      <Navbar />
      {children}
    </div>
  )
}

export default Layout
