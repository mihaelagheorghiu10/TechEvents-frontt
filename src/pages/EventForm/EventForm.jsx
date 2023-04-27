import React from "react";
import { useRef } from "react";
import style from "./eventForm.module.css";
import { useFormik } from "formik";
import * as Yup from "yup";
import Uploady from "@rpldy/uploady";
import UploadButton from "@rpldy/upload-button";
import UploadPreview from "@rpldy/upload-preview";
import UploadUrlInput from "@rpldy/upload-url-input";

export default function EventForm() {

  const uploadRef = useRef(null);

  const uploadFromUrl = () => {
    if (uploadRef && uploadRef.current) {
      uploadRef.current(); //initiate upload
  }
  }
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
      max_participants: "",
      image: "",
      description: "",
    },
    validationSchema: eventSchema,
    onSubmit: async (values) => {
      console.log(values);
    },
  });
  return (
    <Uploady
      debug
      destination={{ url: "src/userPhotos" }}
      
    >
      <div className={style.eventFormPage}>
        <div className={style.eventForm}>
          <h2>Editar Evento</h2>
          <hr />
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
                Fecha
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
                Hora
              </label>
              <input
                name="time"
                id="time"
                type="time"
                value={formik.values.time}
                onChange={formik.handleChange}
              />
            </div>
            <div className={style.labelInput}>
              <label label htmlFor="max_participants">
                Aforo
              </label>
              <input
                name="max_participants"
                id="max_participants"
                type="number"
                value={formik.values.max_participants}
                onChange={formik.handleChange}
              />
            </div>
          </div>

          <div className={style.labelInput}>
            <label htmlFor="image">Imagen</label>
            {/* <input
              className={style.imgButton}
              name="image"
              id="image"
              type="file"
              value={formik.values.image}
              onChange={formik.handleChange}
            /> */}
            <UploadButton>Subir imagen</UploadButton>
            <div className={style.urlUpload}>              
              <UploadUrlInput placeholder="Desde URL" uploadRef={uploadRef}></UploadUrlInput>
              <button onClick={()=> uploadFromUrl()}>Subir</button>
            </div>
          </div>
          <div className={style.labelInput}>
            <label htmlFor="description">Descripción</label>
            <textarea
              name="description"
              id="description"
              type="text"
              value={formik.values.description}
              onChange={formik.handleChange}
              required
              rows={6}
            />
          </div>
          <button className={style.submitButton}>Editar</button>
        </div>
        <div className={style.previewForm}>
          <h2>Previsualizar</h2>
          <hr />
          <div className={style.cardPreviewForm}>
            <h2 className={style.eventTitle}>{formik.values.title}</h2>
            <div className={style.eventPhotoContainer}>
              {/* <img
                className={style.eventPhoto}
                src={
                  formik.values.image
                    ? formik.values.image
                    : "https://www.generationsforpeace.org/wp-content/uploads/2018/03/empty.jpg"
                }
                alt={`Foto de ${formik.values.title}`}
              /> */}
              <UploadPreview fallbackUrl="https://www.generationsforpeace.org/wp-content/uploads/2018/03/empty.jpg" ></UploadPreview>
            </div>
            <p className={style.eventDate}>{`${
              formik.values.date
                ? new Date(formik.values.date).toLocaleDateString("es-ES")
                : ""
            } ${formik.values.time}`}</p>
            <p className={style.eventMaxParticipants}>
              <strong>Aforo: </strong>
              {`${formik.values.max_participants} participantes`}
            </p>
            <h4 className={style.eventDetailHeader}>Detalles: </h4>
            <p className={style.eventDescription}>
              {formik.values.description}
            </p>
          </div>
        </div>
      </div>
    </Uploady>
  );
}
