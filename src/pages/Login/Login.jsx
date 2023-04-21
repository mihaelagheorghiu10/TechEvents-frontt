import React from 'react'
import style from './login.module.css'
import * as Yup from 'yup';
import { useFormik } from 'formik';
import {useAuth} from "../../hooks/useAuth"

export default function Login() {

  const auth = useAuth();
      
    let loginSchema = Yup.object().shape({
        email: Yup.string()
          .email("No es un email válido")
          .required("Campo obligatorio"),
        password: Yup.string()
          .min(8, "El número mínimo de caracteres es 8")
          .max(30, "El número maximo de caracteres es 30")
          .required("Campo obligatorio"),
      });

      const formik = useFormik({
        initialValues: {
          email: "",
          password: "",
        },
        validationSchema: loginSchema,
        
        onSubmit: async (values) => {
          console.log(values);
          await auth.login(values);
          
        },
      });

  return (
    <div className={style.loginPage}>
      <form className={style.loginForm} onSubmit={formik.handleSubmit}>
        
        <div className={style.labelInput}>
          <label for="email">Email</label>
          <input
            name="email"
            id="email"
            type="text"
            placeholder="email@email.com"
            value={formik.values.email}
            onChange={formik.handleChange}
          />
          {formik.errors.email ? (
          <div className={style.errorToast}>{formik.errors.email}</div>
        ) : null}
        </div>
        <div className={style.labelInput}>
          <label for="password">Contraseña</label>
          <input
            name="password"
            id="password"
            type="password"
            placeholder="contraseña"
            value={formik.values.password}
            onChange={formik.handleChange}
          />
          {formik.errors.password ? (
          <div className={style.errorToast}>{formik.errors.password}</div>
        ) : null}
        </div>

        <button className={style.loginButton} type="submit">Login</button>
      </form>
    </div>
  )
}
