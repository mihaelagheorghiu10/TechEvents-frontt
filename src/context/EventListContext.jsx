import { createContext, useState } from "react";

const EventListContext = createContext();

const mocklist = [
  {
    id: 1,
    title: "Titulo 1",
    description: "Descripción evento. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
    date: "fecha",
    time: "hora",
    photo: "https://media.istockphoto.com/id/1181250359/photo/business-people.jpg?s=612x612&w=0&k=20&c=1DFEPJdcvlhFdQYp-hzj2CYXXRn-b6qYoPgyOptZsck=",
    max_participants: 20,
    isHighLighted: false
  },
  {
    id: 2,
    title: "Titulo 2",
    description: "Descripción evento. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
    date: "fecha",
    time: "hora",
    photo: "https://media.istockphoto.com/id/857218864/photo/business-people-in-business-center-lobby.jpg?s=170667a&w=0&k=20&c=ZbrWIbfB_BJV-JEAJfSdvabNUCOcfYbs0QSSeDgTZbc=",
    max_participants: 25,
    isHighLighted: false
  },
  {
    id: 3,
    title: "Titulo 3",
    description: "Descripción evento. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
    date: "fecha",
    time: "hora",
    photo: "https://upload.wikimedia.org/wikipedia/commons/c/c7/Messe_Luzern_Corporate_Event.jpg",
    max_participants: 30,
    isHighLighted: false
  }
];

const EventListProvider = ({ children }) => {
  const [eventList, setEventList] = useState(mocklist);
  const [filterBy, setFilterBy] = useState("none");

  const handleAddEvent = (newEvent) => {};

  const handleRemoveEvent = (id) => {};

  const handleEditEvent = (id, newEvent) => {};

  //get by id mock // PARA BORRAR:
  const mockGetById = (id) => {
    return eventList.find(event => event.id == id)
    }    

  const data = {
    eventList,
    filterBy,
    setFilterBy,
    handleAddEvent,
    handleEditEvent,
    handleRemoveEvent,
    mockGetById         //eliminar elemento luego de vincular con api
  };

  return (
    <EventListContext.Provider value={data}>
      {children}
    </EventListContext.Provider>
  );
};

export { EventListProvider };
export default EventListContext;
