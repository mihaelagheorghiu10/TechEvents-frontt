import { createContext, useState } from "react";

const EventListContext = createContext();

const EventListProvider = ({ children }) => {
  const [eventList, setEventList] = useState([]);
  const [filterBy, setFilterBy] = useState("none");

  const handleAddEvent = (newEvent) => {};

  const handleRemoveEvent = (id) => {};

  const handleEditEvent = (id, newEvent) => {};

  const handleChangeFilterBy = (e) => {
    setFilterBy(e.target.value);
  };

  const data = {
    eventList,
    filterBy,
    handleAddEvent,
    handleEditEvent,
    handleRemoveEvent,
    handleChangeFilterBy,
  };

  return (
    <EventListContext.Provider value={data}>
      {children}
    </EventListContext.Provider>
  );
};

export { EventListProvider };
export default EventListContext;
