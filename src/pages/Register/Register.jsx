import React from "react";
import style from "./register.module.css";
import { useFormik } from "formik";
import * as Yup from "yup";

export default function Register() {
  let registerSchema = Yup.object().shape({
    username: Yup.string()
      .min(6, "El número mínimo de caracteres es 6")
      .max(15, "el número máximo de caracteres es 15")
      .required(),

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
          <label for="userName">Nombre de Usuario</label>
          <input
            name="userName"
            id="userName"
            type="text"
            placeholder="Nombre de usuario"
            value={formik.values.username}
            onChange={formik.handleChange}
          />
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
        </div>
        <div className={style.labelInput}>
          <label for="passwordConfirm">Confirmar Contraseña</label>
          <input
            name="passwordConfirm"
            id="passwordConfirm"
            type="password"
            placeholder="confirmar contraseña"
            value={formik.values.confirmPassword}
            onChange={formik.handleChange}
          />
        </div>

        <button className={style.registerButton} type="submit">Registrarse</button>
      </form>
    </div>
  );
}
