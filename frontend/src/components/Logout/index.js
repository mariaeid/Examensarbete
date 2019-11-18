import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";

import styles from "./index.module.scss";

class Logout extends Component {
  handle_logout = () => {
    localStorage.clear();
  };

  render() {
    return (
      <Link to="/" className={styles.logoutLink}>
        <button className={styles.logoutButton} onClick={this.handle_logout}>
          Logga ut
        </button>
      </Link>
    );
  }
}

export default withRouter(Logout);
