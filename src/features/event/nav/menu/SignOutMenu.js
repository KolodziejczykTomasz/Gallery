import React from "react";
import { Button, Menu } from "semantic-ui-react";

const SignOutMenu = ({ signIn, register }) => {
  return (
    <Menu.Item position="right">
      <Button
        onClick={signIn}
        basic
        inverted
        content="Login"
        style={{ marginLeft: "0.5em" }}
      />
      <Button
        onClick={register}
        basic
        inverted
        content="Register"
        style={{ marginLeft: "0.5em" }}
      />
    </Menu.Item>
  );
};

export default SignOutMenu;
