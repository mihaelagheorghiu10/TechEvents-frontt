import React from 'react'
import style from './navMenu.module.css'
import { useAuth } from '../../hooks/useAuth'
import { Link } from 'react-router-dom';

export default function NavMenu() {
    const auth = useAuth();
    
  return (
    <ul className={style.NavMenuContainer}>
        {auth.authed ?
            <ul className={style.navMenuList}> 
                <li>Perfil</li>
                <li>Mis Eventos</li>
                <li onClick={()=> auth.logout()}>Logout</li>
            </ul>
        :
            <ul className={style.navMenuList}>
                <Link className={style.menuLink} to="/login" ><li>Iniciar Sesión</li></Link>
                <Link className={style.menuLink} to="/register"><li>Registrarse</li></Link>
            </ul>
    }        
    </ul>
  )
}
