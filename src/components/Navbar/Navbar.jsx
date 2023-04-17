import React from 'react'
import styles from './navbar.module.css'
import userImage from '../Assets/Image20230417113019.png'

export default function Navbar() {
  return (
    <div className={styles.divContenedor}>
      <div className={[styles.navbar, styles.navbarLeft].join(' ')}>
        <h1 className={styles.h1Title}>Tech Events</h1>
      </div>
      <div className={[styles.navbar, styles.navbarRight].join(' ')}>
        <p>Usuario</p>
        <img
          src={userImage}
          className={styles.userImage}
          alt="imagen Usuario"
        />
      </div>
    </div>
  )
}
