import React from 'react'
import styles from './navbar.module.css'
import userImage from '../Assets/Image20230417113019.png'
import {Link} from 'react-router-dom'

export default function Navbar() {
  return (
    <div className={styles.divContenedor}>
      <div className={[styles.navbar, styles.navbarLeft].join(' ')}>
        <Link className={styles.link} to={"/events"}>
          <h1 className={styles.h1Title}>Tech Events</h1>
        </Link>
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
