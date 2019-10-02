import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import brand from "../../../../assets/images/brand.png";
import { Container, Menu, Button } from "semantic-ui-react";
import SignOutMenu from "../../nav/menu/SignOutMenu";
import SignInMenu from "../../nav/menu/SignInMenu";
import { openModal } from "../../../modals/modalActions";
import { withFirebase } from "react-redux-firebase";

const actions = {
  openModal
};

const mapState = state => ({
  auth: state.firebase.auth,
  profile: state.firebase.profile
});

class NavBar extends Component {
  handleSignIn = () => {
    this.props.openModal("LoginModal");
  };

  handleRegister = () => {
    this.props.openModal("RegisterModal");
  };

  handleSignOut = () => {
    this.props.firebase.logout();
    this.props.history.push("/");
  };

  render() {
    const { auth, profile } = this.props;
    const authenticated = auth.isLoaded && !auth.isEmpty;
    return (
      <Menu inverted fixed="top">
        <Container>
          <Menu.Item header as={Link} to="/">
            <img src={brand} alt="logo" />
            <span style={{ marginLeft: "8px", textTransform: "uppercase" }}>
              <span style={{ color: "orange" }}>Gal</span>lery
            </span>
          </Menu.Item>
          {authenticated && (
            <Fragment>
              <Menu.Item>
                <Button
                  as={Link}
                  to="/addtogallery"
                  positive
                  inverted
                  content="Add"
                />
                <Button
                  as={Link}
                  to="/event"
                  positive
                  inverted
                  content="Photo"
                  style={{ marginLeft: "10px", width: "100px" }}
                />
              </Menu.Item>
            </Fragment>
          )}

          {authenticated ? (
            <SignInMenu
              auth={auth}
              profile={profile}
              signOut={this.handleSignOut}
            />
          ) : (
            <SignOutMenu
              signIn={this.handleSignIn}
              register={this.handleRegister}
            />
          )}
        </Container>
      </Menu>
    );
  }
}

export default withRouter(
  withFirebase(
    connect(
      mapState,
      actions
    )(NavBar)
  )
);
