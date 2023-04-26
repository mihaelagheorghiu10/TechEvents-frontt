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
                <li>Logout</li>
            </ul>
        :
            <ul className={style.navMenuList}>
                <Link to="/login"><li>Login</li></Link>
            </ul>
    }        
    </ul>
  )
}
