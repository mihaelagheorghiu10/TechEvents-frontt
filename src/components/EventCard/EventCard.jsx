import React from 'react'
import style from './eventCard.module.css'

export default function EventCard() {
  return (
    <div className={style.eventCardContainer}>
      <div className={style.cardLeft}>
        <img className={style.cardImage} src={"https://media.istockphoto.com/id/1181250359/photo/business-people.jpg?s=612x612&w=0&k=20&c=1DFEPJdcvlhFdQYp-hzj2CYXXRn-b6qYoPgyOptZsck="} alt="" />
      </div>
      <div className={style.cardRight}>
        <h3 className={style.cardTitle}>{"Título"}</h3>
        <p className={style.cardDescription}>{"Descripción evento. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis."}</p>
        <p className={style.cardInfo}>{"Lugar, Fecha y Hora"}</p>
      </div>
    </div>
  )
}
