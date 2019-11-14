import React, { Component } from "react";
import { Redirect } from "react-router";
import { withRouter } from "react-router-dom";
import axios from "axios";

import LoginSignUp from "../LoginSignUp";
import LoginForm from "../LoginForm";
import SignupForm from "../SignupForm";

import { serverAddress } from "../../config.js";

const base_url = serverAddress;

class Auth extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayed_form: "",
      username: ""
    };
  }

  handle_login = (e, data) => {
    e.preventDefault();
    try {
      axios({
        method: "post",
        url: base_url + "/token-auth/",
        headers: {
          "Content-Type": "application/json"
        },
        data: {
          username: data.username,
          password: data.password
        }
      }).then(response => {
        console.log("Res", response);
        localStorage.setItem("access_token", response.data.token);
        localStorage.setItem("username", response.data.user.username);
        this.setState({
          username: response.data.user.username
        });
      });
    } catch (e) {
      console.log("Error", e);
    }
  };

  handle_signup = (e, data) => {
    e.preventDefault();
    try {
      axios({
        method: "post",
        url: base_url + "/core/users/",
        headers: {
          "Content-Type": "application/json"
        },
        data: {
          username: data.username,
          password: data.password,
          first_name: data.first_name,
          last_name: data.last_name
        }
      }).then(response => {
        console.log("Res", response);
        localStorage.setItem("access_token", response.data.token);
        localStorage.setItem("username", response.data.username);
        this.setState({
          username: response.data.username
        });
      });
    } catch (e) {
      console.log("Error", e);
    }
  };

  display_form = form => {
    this.setState({
      displayed_form: form
    });
  };

  render() {
    console.log("lokalbutiken", localStorage.getItem("username"));

    if (localStorage.getItem("access_token")) {
      return <Redirect to="/user" />;
    }

    if (localStorage.getItem("username")) {
      return <Redirect to="/user" />;
    }
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
      <div>
        <LoginSignUp display_form={this.display_form} />
        {form}
      </div>
    );
  }
}

export default withRouter(Auth);
