import React, { Component } from "react";
import PropTypes from "prop-types";

class ButtonLogout extends Component {
  render() {
    return <button onClick={this.props.handle_logout}>Logga ut</button>;
  }
}

export default ButtonLogout;

ButtonLogout.propTypes = {
  handle_logout: PropTypes.func.isRequired
};
