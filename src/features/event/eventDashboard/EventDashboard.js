import React, { Component } from 'react';
import EventList from "../eventList/EvenList";
import NavBar from "../nav/navBar/NavBar";
// import PhotoInput from "../addPhoto/PhotoInput";

class EventDashboard extends Component {
  render() {
    return (
      <>
        <NavBar />
        <EventList />
        {/* <PhotoInput  photos={this.props.photos} profile={this.props.profile}/> */}
      </>
    );
  }
}

export default EventDashboard;
