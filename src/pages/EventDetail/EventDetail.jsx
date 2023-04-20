import React from 'react'
import style from './eventDetail.module.css'
import { useParams } from 'react-router-dom';

export default function EventDetail() {

    let { id } = useParams();
    
  return (
    <div className={style.eventDetailPage}>

      
    </div>
  )
}
