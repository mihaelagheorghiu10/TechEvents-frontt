import React from "react";
import style from "./footer.module.css";
import { BsFacebook } from "../../../node_modules/react-icons/bs";
import {
  AiFillTwitterCircle,
  AiFillInstagram,
  AiFillYoutube,
} from "../../../node_modules/react-icons/ai";
import { FaTiktok } from "../../../node_modules/react-icons/fa";
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <div className={style.footerContainer}>
      <div className={style.footerLeft}>
        <Link className= {style.link} to={"/register"}><p>Regístrate</p></Link>
        <Link className= {style.link} to={"/login"}><p>Inicia sesión</p></Link>
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
