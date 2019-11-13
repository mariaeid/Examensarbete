import React, { Component } from "react";
import PropTypes from "prop-types";
import { withRouter, Link } from "react-router-dom";

import { handle_logout } from "../../utils/JWTAuth.js";

import styles from "./index.module.scss";

class Logout extends Component {
  handle_logout(e) {
    handle_logout();
  }
  render() {
    return (
      <div>
        <Link to="/">
          <button onClick={this.handle_logout}>Logga ut</button>{" "}
        </Link>
      </div>
    );
  }
}

export default withRouter(Logout);
