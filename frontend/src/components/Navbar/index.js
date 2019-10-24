import React, { Component } from "react";
import PropTypes from "prop-types";

class Navbar extends Component {
  render() {
    const loggedOutNav = (
      <div>
        <div>
          <button
            onClick={() => {
              this.props.display_form("login");
            }}
          >
            {" "}
            Logga in
          </button>
        </div>
        <div>
          <button
            onClick={() => {
              this.props.display_form("signup");
            }}
          >
            Skapa användare
          </button>
        </div>
      </div>
    );

    // const loggedInNav = (
    //   <ul>
    //     <li onClick={this.props.handle_logout}>Logga ut</li>
    //   </ul>
    // );
    return (
      <div>
        <div>{loggedOutNav}</div>
      </div>
    );
  }
}
export default Navbar;

Navbar.propTypes = {
  logged_in: PropTypes.bool.isRequired,
  display_form: PropTypes.func.isRequired
  // handle_logout: PropTypes.func.isRequired
};
