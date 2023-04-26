import React from 'react'
import style from './navMenu.module.css'
import { useAuth } from '../../hooks/useAuth'

export default function NavMenu() {
    const auth = useAuth();
  return (
    <div className={style.NavMenuContainer}>
        {auth.authed ?
            <ul> 
                <li>Perfil</li>
                <li>Mis Eventos</li>
                <li>Logout</li>
            </ul>
        :
            <ul>
                <li>Login</li>
            </ul>
    }        
    </div>
  )
}
