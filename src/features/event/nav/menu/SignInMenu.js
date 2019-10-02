import React from "react";
import { Menu, Image, Dropdown } from "semantic-ui-react";
import user from "../../../../assets/images/user.png";
import { Link } from "react-router-dom";


const SignInMenu = ({ signOut, profile, auth }) => {
  return (
    <Menu.Item position="right">
      <Image avatar spaced="right" src={profile.photoURL || user} />
      <Dropdown 
      pointing="top left" 
      text={profile.displayName || auth.email}>
        <Dropdown.Menu>
             <Dropdown.Item
                        as={Link}
                        to='/settings'
                        text="Settings"
                        icon="settings" />
          <Dropdown.Item onClick={signOut} text="Sign Out" icon="power" />
        </Dropdown.Menu>
      </Dropdown>
    </Menu.Item>
  );
};

export default SignInMenu;
