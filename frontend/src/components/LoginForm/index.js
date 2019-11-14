import React from "react";
import { MdClose } from "react-icons/md";
import { IconContext } from "react-icons";
// import { handle_login } from "../../utils/JWTAuth.js";

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
      <div className={styles.LoginFormContainer}>
        <IconContext.Provider value={{ color: "#291502", size: "1.5rem" }}>
          <div className={styles.icon}>
            <MdClose onClick={this.onClose} />
          </div>
        </IconContext.Provider>

        <form
          className={styles.loginForm}
          onSubmit={e => this.props.handle_login(e, this.state)}
        >
          <p>Logga in</p>
          <div className={styles.formFiledsContainer}>
            <label htmlFor="username">Mail</label>
            <input
              type="email"
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
          </div>
          <input className={styles.submit} type="submit" value="Logga in" />
        </form>
      </div>
    );
  }
}

export default LoginForm;
