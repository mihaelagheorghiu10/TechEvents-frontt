import React from "react";
import style from "./eventCard.module.css";
import { Link } from "react-router-dom";

export default function EventCard({ event }) {
  return (
    <li className={style.eventCardContainer}>
      <div className={style.cardLeft}>
        <Link to={`/events/${event.id}`}>
          <img
            className={style.cardImage}
            src={event.photo}
            alt={`Foto de ${event.title}`}
          />
        </Link>
        <p className={style.cardInfo}>{`Lugar, ${event.date} ${event.time}`}</p>
      </div>
      <div className={style.cardRight}>
        <h3 className={style.cardTitle}>{event.title}</h3>
        <p className={style.cardDescription}>
          {event.description.substring(0, 250) + " . . ."}
        </p>
      </div>
    </li>
  );
}
