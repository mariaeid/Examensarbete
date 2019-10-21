import React from "react";
import PropTypes from "prop-types";

function Navbar(props) {
  const logged_out_nav = (
    <ul>
      <li onClick={() => props.display_form("login")}>Logga in</li>
      <li onClick={() => props.display_form("signup")}>Skapa användare</li>
    </ul>
  );

  const logged_in_nav = (
    <ul>
      <li onClick={props.handle_logout}>Logga ut</li>
    </ul>
  );
  return <div>{props.logged_in ? logged_in_nav : logged_out_nav}</div>;
}

export default Navbar;

Navbar.propTypes = {
  logged_in: PropTypes.bool.isRequired,
  display_form: PropTypes.func.isRequired,
  handle_logout: PropTypes.func.isRequired
};
