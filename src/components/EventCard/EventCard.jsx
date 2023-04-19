import React from 'react'
import style from './eventCard.module.css'

export default function EventCard({event, key}) {
    
  return (
    <li className={style.eventCardContainer}>
      <div className={style.cardLeft}>
        <img className={style.cardImage} src={event.photo} alt={`Foto de ${event.title}`} />
      </div>
      <div className={style.cardRight}>
        <h3 className={style.cardTitle}>{event.title}</h3>
        <p className={style.cardDescription}>{event.description}</p>
        <p className={style.cardInfo}>{`Lugar, ${event.date} ${event.time}`}</p>
      </div>
    </li>
  )
}
