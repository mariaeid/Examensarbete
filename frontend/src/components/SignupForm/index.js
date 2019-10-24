import React from "react";
import PropTypes from "prop-types";

import styles from "./index.module.scss";

class SignupForm extends React.Component {
  constructor() {
    super();
    this.show = true;
    this.state = {
      username: "",
      password: ""
    };
  }

  handle_change = e => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState(prevstate => {
      const newState = { ...prevstate };
      newState[name] = value;
      return newState;
    });
  };

  onClose = () => {
    this.show = false;
    this.forceUpdate();
  };

  render() {
    if (!this.show) {
      this.show = !this.show;
      return null;
    }
    return (
      <div className={styles.container}>
        <form onSubmit={e => this.props.handle_signup(e, this.state)}>
          <h4>Skapa konto</h4>
          <label htmlFor="username">Användarnamn</label>
          <input
            type="text"
            name="username"
            value={this.state.username}
            onChange={this.handle_change}
          />
          <label htmlFor="password">Lösenord</label>
          <input
            type="password"
            name="password"
            value={this.state.password}
            onChange={this.handle_change}
          />
          <input type="submit" />
        </form>
        <button className={styles.toggleButton} onClick={this.onClose}>
          Close
        </button>
      </div>
    );
  }
}

export default SignupForm;

SignupForm.propTypes = {
  handle_signup: PropTypes.func.isRequired
};
