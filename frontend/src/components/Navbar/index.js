import React, { Component } from "react";
import PropTypes from "prop-types";
import ReactDOM from "react-dom";

class Navbar extends Component {
  render() {
    const loggedOutNav = (
      <ul>
        <li
          onClick={() => {
            this.props.display_form("login");
          }}
        >
          {" "}
          Logga in
        </li>
        <li
          onClick={() => {
            this.props.display_form("signup");
          }}
        >
          Skapa användare
        </li>
      </ul>
    );

    const loggedInNav = (
      <ul>
        <li onClick={this.props.handle_logout}>Logga ut</li>
      </ul>
    );
    return (
      <div>
        <div>{this.props.logged_in ? loggedInNav : loggedOutNav}</div>
      </div>
    );
  }
}
export default Navbar;

Navbar.propTypes = {
  logged_in: PropTypes.bool.isRequired,
  display_form: PropTypes.func.isRequired,
  handle_logout: PropTypes.func.isRequired
};
