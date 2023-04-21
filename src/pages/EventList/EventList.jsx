import { React, useContext } from "react";
import style from "./eventList.module.css";
import EventCard from "../../components/EventCard/EventCard";
import EventListContext from "../../context/EventListContext";

export default function EventList() {
  const eventContext = useContext(EventListContext);

  return (
    <div className={style.EventListPage}>
      <ul className={style.EventList}>
        {eventContext.eventList.map((event, index) => (
          <li key={index}>
            <EventCard event={event} />
          </li>
        ))}
      </ul>
    </div>
  );
}
