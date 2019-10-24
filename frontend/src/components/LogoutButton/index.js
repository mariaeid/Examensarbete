import React, { Component } from "react";
import PropTypes from "prop-types";

class LogoutButton extends Component {
  render() {
    const loggedInNav = (
      <button onClick={this.props.handle_logout}>Logga ut</button>
    );
    return (
      <div>
        <div>{loggedInNav}</div>
      </div>
    );
  }
}

export default LogoutButton;

LogoutButton.propTypes = {
  handle_logout: PropTypes.func.isRequired
};
