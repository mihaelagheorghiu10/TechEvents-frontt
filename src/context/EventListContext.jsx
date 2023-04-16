import { createContext, useState } from "react";

const EventListContext = createContext();

const EventListProvider = ({ children }) => {
  const [eventList, setEventList] = useState([]);
  const [filterBy, setFilterBy] = useState("none");

  const handleAddEvent = (newEvent) => {};

  const handleRemoveEvent = (id) => {};

  const handleEditEvent = (id, newEvent) => {};

  const data = {
    eventList,
    filterBy,
    setFilterBy,
    handleAddEvent,
    handleEditEvent,
    handleRemoveEvent,
  };

  return (
    <EventListContext.Provider value={data}>
      {children}
    </EventListContext.Provider>
  );
};

export { EventListProvider };
export default EventListContext;
