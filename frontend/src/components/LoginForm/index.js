import React from "react";
import PropTypes from "prop-types";

import styles from "./index.module.scss";

class LoginForm extends React.Component {
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
        <form onSubmit={e => this.props.handle_login(e, this.state)}>
          <p>Logga in</p>
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
          <input className={styles.submit} type="submit" value="Logga in" />
        </form>
        <button className={styles.closeButton} onClick={this.onClose}>
          Close
        </button>
      </div>
    );
  }
}

export default LoginForm;

LoginForm.propTypes = {
  handle_login: PropTypes.func.isRequired
};
