import React from "react";
import style from "./eventForm.module.css";
import { useFormik } from "formik";
import * as Yup from "yup";

export default function EventForm() {
  let eventSchema = Yup.object().shape({
    title: Yup.string()
      .min(8, "El número mínimo de caracteres es 8")
      .max(150, "el número máximo de caracteres es 150")
      .required("Campo obligatorio"),
  });

  const formik = useFormik({
    initialValues: {
      title: "",
      date: "",
      time: "",
      confirmPassword: "",
    },
    validationSchema: eventSchema,
    onSubmit: async (values) => {
      console.log(values);
    },
  });
  return (
    <div className={style.eventFormPage}>
      <div className={style.eventForm}>
        <h2>Editar Evento</h2>
        <div className={style.labelInput}>
          <label htmlFor="title">Título</label>
          <input
            name="title"
            id="title"
            type="text"
            value={formik.values.title}
            onChange={formik.handleChange}
          />
        </div>
        <div className={style.dateHour}>
          <div className={style.labelInput}>
            <label label htmlFor="date">
              Título
            </label>
            <input
              name="date"
              id="date"
              type="date"
              value={formik.values.date}
              onChange={formik.handleChange}
            />
          </div>
          <div className={style.labelInput}>
            <label label htmlFor="time">
              Título
            </label>
            <input
              name="time"
              id="time"
              type="time"
              value={formik.values.time}
              onChange={formik.handleChange}
            />
          </div>
        </div>
        <div className={style.imageInput}>
          <div className={style.labelInput}>
            <label htmlFor="title">Título</label>
            <input
              name="title"
              id="title"
              type="text"
              value={formik.values.title}
              onChange={formik.handleChange}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
