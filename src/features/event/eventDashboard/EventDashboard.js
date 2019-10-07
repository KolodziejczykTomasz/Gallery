import React from 'react';
import EventList from "../eventList/EvenList";
import NavBar from "../nav/navBar/NavBar";
import Input from '../Input/Input';




const EventDashboard = () => {

  return (
    <>
      <NavBar />
      <EventList />
      <Input />
    </>
  );
}

export default EventDashboard;
