import React, { Component } from "react";
import PropTypes from "prop-types";

import styles from "./index.module.scss";

class LoginSignUp extends Component {
  render() {
    const loggedOut = (
      <div className={styles.container}>
        <button
          className={styles.buttonSecondary}
          onClick={() => {
            this.props.display_form("login");
          }}
        >
          {" "}
          Logga in
        </button>
        <button
          className={styles.buttonPrimary}
          onClick={() => {
            this.props.display_form("signup");
          }}
        >
          Skapa användare
        </button>
      </div>
    );

    return <div>{loggedOut}</div>;
  }
}
export default LoginSignUp;

LoginSignUp.propTypes = {
  logged_in: PropTypes.bool.isRequired,
  display_form: PropTypes.func.isRequired
};
