import React, { Fragment } from "react";
import { Menu, Header } from "semantic-ui-react";
import { NavLink } from "react-router-dom";

const SettingsNav = () => {
  return (
    <Fragment>
      <Menu vertical>
        <Header icon="user" attached inverted color="grey" content="Profile" />

        <Menu.Item as={NavLink} to="/settings/basic">
          Settings
        </Menu.Item>
        <Menu.Item as={NavLink} to="/settings/account">
          Account
        </Menu.Item>
        <Menu.Item as={NavLink} to="/settings/addphoto">
          Profile Image
        </Menu.Item>
      </Menu>
    </Fragment>
  );
};

export default SettingsNav;
