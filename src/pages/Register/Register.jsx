import React from "react";
import style from "./register.module.css";
import { useFormik } from "formik";
import * as Yup from "yup";

export default function Register() {
  let registerSchema = Yup.object().shape({
    username: Yup.string()
      .min(8, "El número mínimo de caracteres es 8")
      .max(15, "el número máximo de caracteres es 15")
      .required("Campo obligatorio"),

    email: Yup.string()
      .email("No es un email válido")
      .required("Campo obligatorio"),
    password: Yup.string()
      .min(8, "El número mínimo de caracteres es 8")
      .max(30, "El número maximo de caracteres es 30")
      .matches(/[A-Z]/, "Debe incluir mayúsculas")
      .matches(/[0-9]/, "Debe incluir números")
      .required("Campo obligatorio"),
    confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null],"La contraseña no es la misma")
    .required()
    
  });

  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: registerSchema,
    onSubmit: (e) => {
      console.log(e);
    },
  });

  return (
    <div className={style.registerPage}>
      <form className={style.registerForm} onSubmit={formik.handleSubmit}>
        <div className={style.labelInput}>
          <label for="username">Nombre de Usuario</label>
          <input
            name="username"
            id="username"
            type="text"
            placeholder="nombre de usuario"
            value={formik.values.username}
            onChange={formik.handleChange}
          />
          {formik.errors.username ? (
          <div className={style.errorToast}>{formik.errors.username}</div>
        ) : null}
        </div>
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
        <div className={style.labelInput}>
          <label for="passwordConfirm">Confirmar Contraseña</label>
          <input
            name="confirmPassword"
            id="confirmPassword"
            type="password"
            placeholder="confirmar contraseña"
            value={formik.values.confirmPassword}
            onChange={formik.handleChange}
          />
          {formik.errors.confirmPassword ? (
          <div className={style.errorToast}>{formik.errors.confirmPassword}</div>
        ) : null}
        </div>

        <button className={style.registerButton} type="submit">Registrarse</button>
      </form>
    </div>
  );
}
