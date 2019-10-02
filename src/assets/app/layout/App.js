import React, { Component, Fragment } from "react";
import { Route, withRouter } from 'react-router-dom';
import HomePage from "../../../features/event/home/HomePage";
import "./styles.css";
import EventDashboard from "../../../features/event/eventDashboard/EventDashboard";
import SettingsDashboard from "../../../features/event/user/Settings/SettingsDashBoard";
import { Container } from "semantic-ui-react";
import NavBar from "../../../features/event/nav/navBar/NavBar";
import ModalManager from "../../../features/modals/ModalManager";
import AddPhoto from "../../../features/event/user/addPhoto/AddPhoto";

class App extends Component {
  render() {
    return (
      <Fragment>
        <ModalManager />
        <Route exact path="/" component={HomePage} />
        <Route
          path="/(.+)"
          render={() => (
            <Fragment>
              <NavBar/>
              <Container>   
                 <Route exact path="/" component={HomePage} />          
                <Route path="/event" component={EventDashboard} />
                <Route path="/addphoto" component={AddPhoto} />
                <Route path='/settings' component={SettingsDashboard} />
              </Container>
            </Fragment>
          )}
        />
      </Fragment>
    );
  }
}

export default withRouter(App);

