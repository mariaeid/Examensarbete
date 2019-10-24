import React, { Component } from "react";
import { Route, Redirect } from "react-router";

import LoginSignUp from "../LoginSignUp";
import LoginForm from "../LoginForm";
import SignupForm from "../SignupForm";

import styles from "./index.module.scss";

class Hero extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videoURL: `${process.env.PUBLIC_URL}/videos/windTurbine.mp4`,
      displayed_form: "",
      logged_in: localStorage.getItem("token") ? true : false,
      username: ""
    };
  }

  handle_login = (e, data) => {
    e.preventDefault();
    fetch("http://localhost:8000/token-auth/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(json => {
        localStorage.setItem("token", json.token);
        this.setState({
          logged_in: true,
          displayed_form: "",
          username: json.user.username
        });
      });
  };

  handle_signup = (e, data) => {
    e.preventDefault();
    fetch("http://localhost:8000/core/users/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(json => {
        localStorage.setItem("token", json.token);
        this.setState({
          logged_in: true,
          displayed_form: "",
          username: json.username
        });
      });
  };

  handle_logout = () => {
    localStorage.removeItem("token");
    this.setState({ logged_in: false, username: "" });
    this.props.history.push("/");
  };

  display_form = form => {
    this.setState({
      displayed_form: form
    });
  };

  render() {
    let form;
    switch (this.state.displayed_form) {
      case "login":
        form = <LoginForm handle_login={this.handle_login} />;
        break;
      case "signup":
        form = <SignupForm handle_signup={this.handle_signup} />;
        break;
      default:
        form = null;
    }
    return (
      <div className={styles.container}>
        <video id="background-video" loop autoPlay>
          <source src={this.state.videoURL} type="video/mp4" />
          <source src={this.state.videoURL} type="video/ogg" />
          Your browser does not support the video tag.
        </video>
        <div className={styles.overlay}>
          <div className={styles.overlayContainer}>
            <p className={styles.title}>Tillsammans förbättrar vi världen</p>
            <LoginSignUp
              logged_in={this.state.logged_in}
              display_form={this.display_form}
            />
            {form}
            <Route
              exact
              path="/"
              render={() =>
                this.state.logged_in ? <Redirect to="/user" /> : ""
              }
            />
            <div className={styles.readMoreContainer}>
              <p className={styles.text}>Läs mer</p>
              <img
                src={`${process.env.PUBLIC_URL}/icons/doubleArrows.png`}
                alt="Läs mer"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Hero;
