<<<<<<< HEAD
/* import React from 'react'
import styles from './footer.module.css'

export default function Footer() {
  return (
    <div className={styles.divFooterContenedor}>
      <div className={styles.divTitle}>
        <h4 className={styles.h4Title}>Registrate</h4>
        <h4 className={styles.h4Title}>Inicia sesion</h4>
        <h4 className={styles.h4Title}>Inicia Ayuda</h4>
      </div>
    </div>
  )
} */
=======
import React from "react";
import style from "./footer.module.css";
import { BsFacebook } from "../../../node_modules/react-icons/bs";
import {
  AiFillTwitterCircle,
  AiFillInstagram,
  AiFillYoutube,
} from "../../../node_modules/react-icons/ai";
import { FaTiktok } from "../../../node_modules/react-icons/fa";

export default function Footer() {
  return (
    <div className={style.footerContainer}>
      <div className={style.footerLeft}>
        <p>Regístrate</p>
        <p>Inicia sesión</p>
        <p>Ayuda</p>
      </div>
      <div className={style.footerRight}>
        <p>Síguenos</p>
        <div className={style.socialMediaLogos}>
          <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
            <BsFacebook />
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noreferrer">
            <AiFillTwitterCircle />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
            <AiFillInstagram />
          </a>
          <a href="https://www.youtube.com" target="_blank" rel="noreferrer">
            <AiFillYoutube />
          </a>
          <a href="https://www.tiktok.com" target="_blank" rel="noreferrer">
            <FaTiktok />
          </a>
        </div>
      </div>
    </div>
  );
}
>>>>>>> dev
