import React from 'react'
import styles from './navbar.module.css'
import userImage from '../Assets/user.png'
import {Link} from 'react-router-dom'
import { useAuth } from '../../hooks/useAuth'

export default function Navbar() {
  const auth = useAuth();  
  console.log(auth);
  const toggleMenu = () => {
    
  }
  return (
    <div className={styles.divContenedor}>
      <div className={[styles.navbar, styles.navbarLeft].join(' ')}>
        <Link className={styles.link} to={"/events"}>
          <h1 className={styles.h1Title}>Tech Events</h1>
        </Link>
      </div>
      <div className={[styles.navbar, styles.navbarRight].join(' ')}>
        <p>{auth.authed? "usuario" : "Invitado"}</p> 
        <div className={styles.imgContainer}>
        <img
          src={auth.authed? "usuario" : userImage}
          className={styles.userImage}
          alt="imagen Usuario"
          onClick={()=>toggleMenu()}
        />
        </div>
      </div>
    </div>
  )
}
