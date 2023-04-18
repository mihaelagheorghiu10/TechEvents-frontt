import React from 'react'
import style from './register.module.css'

export default function Register() {
  return (
    <div className={style.registerPage}>
        <div className={style.registerForm}>
            <div className={style.labelInput}>
                <label for="userName">Nombre de Usuario</label>
                <input name="userName" id="userName" type="text" placeholder="Nombre de usuario"/>
            </div>
            <div className={style.labelInput}>
                <label for="email">Email</label>
                <input name="email" id="email" type="text" placeholder="email@email.com"/>
            </div>
            <div className={style.labelInput}>
                <label for="password">Contraseña</label>
                <input name="password" id="password" type="password" placeholder="contraseña"/>
            </div>
            <div className={style.labelInput}>
                <label for="passwordConfirm">Confirmar Contraseña</label>
                <input name="passwordConfirm" id="passwordConfirm" type="password" placeholder="confirmar contraseña"/>
            </div>
            <button className={style.registerButton}>Registrarse</button>

        </div>
      
    </div>
  )
}
