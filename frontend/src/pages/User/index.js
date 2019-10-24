import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import ButtonLogout from "../../components/ButtonLogout";

class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      logged_in: localStorage.getItem("token") ? true : false,
      username: ""
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

  handle_logout = () => {
    localStorage.removeItem("token");
    this.setState({ logged_in: false, username: "" });
    this.props.history.push("/");
  };

  render() {
    return (
      <div>
        <ButtonLogout handle_logout={this.handle_logout} />
        <p>Hello, {this.state.username}</p>
      </div>
    );
  }
}

export default User;
