import React from 'react'
import styles from './navbar.module.css'

export default function Navbar() {
  return (
    <div className={styles.divContenedor}>
      <h1 className={styles.h1Title}>Tech Events</h1>
      <div className={styles.navbarRight}>
        <p>Usuario</p>
        <div className={styles.imagContainer}>
          <img className={styles.userImage} alt="imagen Usuario" />
        </div>
      </div>
    </div>
  )
}
