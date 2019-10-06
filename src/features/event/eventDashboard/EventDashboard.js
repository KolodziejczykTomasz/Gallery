import React from 'react';
import EventList from "../eventList/EvenList";
import NavBar from "../nav/navBar/NavBar";
import PhotoInputToGallery from '../addToGallery/PhotoInputToGallery';




const EventDashboard = ({ photos }) => {

  return (
    <>
      <NavBar />
      <EventList />
      <PhotoInputToGallery photos={photos} />
    </>
  );
}

export default EventDashboard;
