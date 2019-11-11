import React from "react";
import PropTypes from "prop-types";
import { MdClose } from "react-icons/md";
import { IconContext } from "react-icons";

import styles from "./index.module.scss";

class SignupForm extends React.Component {
  constructor() {
    super();
    this.show = true;
    this.state = {
      username: "",
      password: "",
      first_name: "",
      last_name: ""
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
      <div className={styles.signupFormContainer}>
        <IconContext.Provider value={{ color: "#291502", size: "1.5rem" }}>
          <div className={styles.icon}>
            <MdClose onClick={this.onClose} />
          </div>
        </IconContext.Provider>
        <form
          className={styles.signupForm}
          onSubmit={e => this.props.handle_signup(e, this.state)}
        >
          <p>Skapa konto</p>
          <label htmlFor="username">Mail</label>
          <input
            type="email"
            name="username"
            value={this.state.username}
            onChange={this.handle_change}
          />
          <label htmlFor="firstName">Förnamn</label>
          <input
            type="text"
            name="first_name"
            value={this.state.first_name}
            onChange={this.handle_change}
          />
          <label htmlFor="lastName">Efternamn</label>
          <input
            type="text"
            name="last_name"
            value={this.state.last_name}
            onChange={this.handle_change}
          />
          <label htmlFor="password">Lösenord</label>
          <input
            type="password"
            name="password"
            value={this.state.password}
            onChange={this.handle_change}
          />
          <input className={styles.submit} type="submit" value="Skicka" />
        </form>
      </div>
    );
  }
}

export default SignupForm;

SignupForm.propTypes = {
  // handle_signup: PropTypes.func.isRequired
};
