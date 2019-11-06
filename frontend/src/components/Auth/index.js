import React, { Component } from "react";
import { Redirect } from "react-router";
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
      logged_in: localStorage.getItem("token") ? true : false,
      username: "",
      password: "",
      first_name: "",
      last_name: ""
    };
  }

  componentDidMount() {
    if (this.state.logged_in) {
      fetch("http://localhost:8000/core/current_user/", {
        headers: {
          Authorization: `JWT ${localStorage.getItem("token")}`
        }
      })
        .then(res => res.json())
        .then(json => {
          this.setState({ username: json.username });
        });
    }
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
    })
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log(error.responseta);
      });
  };

  handle_logout = () => {
    localStorage.removeItem("token");
    this.setState({ logged_in: false, username: "" });
    this.forceUpdate();
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

    if (this.state.logged_in === true) {
      return <Redirect to="/user" />;
    }

    return (
      <div>
        <LoginSignUp
          logged_in={this.state.logged_in}
          display_form={this.display_form}
        />
        {form}
      </div>
    );
  }
}

export default Auth;
