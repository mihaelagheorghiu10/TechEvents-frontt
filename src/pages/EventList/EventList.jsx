import React from 'react'
import style from './eventList.module.css'
import EventCard from '../../components/EventCard/EventCard'

export default function EventList() {
  return (
    <div className = {style.EventListPage}>
      <ul className = {style.EventList}>
        <li><EventCard/></li>
      </ul>
      
    </div>
  )
}
