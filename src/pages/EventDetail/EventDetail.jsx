import React, { useEffect, useState, useContext } from 'react'
import style from './eventDetail.module.css'
import { useParams } from 'react-router-dom';
import EventListContext from '../../context/EventListContext';

export default function EventDetail() {

    let { id } = useParams();
    const [event, setEvent] =useState({});

    const eventContext = useContext(EventListContext);

    // useEffect(() => {
    //     // cambiar función mockGetById al vincular con back
    //     console.log(eventContext.mockGetById(id));
    //     eventContext.mockGetById(id).then((res) => { 
    //         setEvent(res);
    //         console.log(event);
    //     })}, [id]);
    useEffect(()=> {
        setEvent(eventContext.mockGetById(id), [id]);
    })

  return (
    <div className={style.eventDetailPage}>
        <div className={style.eventDetail}>
        <h2 className={style.eventTitle}>{event.title}</h2>
        <div className={style.eventPhotoContainer}>
            <img className={style.eventPhoto} src={event.photo} alt={`Foto de ${event.title}`} />
        </div>
        <p className={style.eventDate}>{`${event.date} ${event.time}`}</p>
        <p className={style.eventMaxParticipants}>{`Aforo: ${event.max_participants}`}</p>
        <p className={style.eventDescription}>{event.description}</p>
        </div>
        <button className={style.eventSignInButton}>Apuntarse</button>
    </div>
  )
}
