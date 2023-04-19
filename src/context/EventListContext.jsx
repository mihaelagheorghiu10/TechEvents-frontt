import { createContext, useState } from "react";

const EventListContext = createContext();

const mocklist = [
  {
    title: "Titulo 1",
    description: "Descripción evento. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
    date: "fecha",
    time: "hora",
    photo: "https://media.istockphoto.com/id/1181250359/photo/business-people.jpg?s=612x612&w=0&k=20&c=1DFEPJdcvlhFdQYp-hzj2CYXXRn-b6qYoPgyOptZsck="
  },
  {
    title: "Titulo 2",
    description: "Descripción evento. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
    date: "fecha",
    time: "hora",
    photo: "https://media.istockphoto.com/id/857218864/photo/business-people-in-business-center-lobby.jpg?s=170667a&w=0&k=20&c=ZbrWIbfB_BJV-JEAJfSdvabNUCOcfYbs0QSSeDgTZbc="
  },
  {
    title: "Titulo 3",
    description: "Descripción evento. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
    date: "fecha",
    time: "hora",
    photo: "https://upload.wikimedia.org/wikipedia/commons/c/c7/Messe_Luzern_Corporate_Event.jpg"
  }
];

const EventListProvider = ({ children }) => {
  const [eventList, setEventList] = useState(mocklist);
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
