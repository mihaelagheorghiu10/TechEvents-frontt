import React, { useState } from 'react'
import styles from './navbar.module.css'
import userImage from '../Assets/user.png'
import {Link} from 'react-router-dom'
import { useAuth } from '../../hooks/useAuth'
import NavMenu from '../NavMenu/NavMenu'

export default function Navbar() {
  const auth = useAuth();
  const [menuVisible, setMenuVisible] = useState(false);  
  console.log(auth);
  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  }
  return (
    <>
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
    {menuVisible? <NavMenu/> : <></>}
    </>
  )
}
