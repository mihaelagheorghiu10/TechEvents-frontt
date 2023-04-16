import React from 'react';
import style from './footer.module.css';
import { BsFacebook } from '../../../node_modules/react-icons/bs';
import { AiFillTwitterCircle, AiFillInstagram, AiFillYoutube } from '../../../node_modules/react-icons/ai';
import { FaTiktok } from '../../../node_modules/react-icons/fa';
import { ExternalLink } from 'react-external-link';

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
                <a href="https://www.facebook.com" target="_blank"><BsFacebook/></a>
                <a href="https://www.twitter.com" target="_blank"><AiFillTwitterCircle/></a>
                <a href="https://www.instagram.com" target="_blank"><AiFillInstagram/></a>
                <a href="https://www.youtube.com" target="_blank"><AiFillYoutube/></a>
                <a href="https://www.tiktok.com" target="_blank"><FaTiktok/></a>
            </div>
        </div>
      
    </div>
  )
}
