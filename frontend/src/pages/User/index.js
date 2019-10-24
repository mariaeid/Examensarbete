import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import LogoutButton from "../../components/LogoutButton";

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
        <h3>Hello from User</h3>
        <LogoutButton handle_logout={this.handle_logout} />
      </div>
    );
  }
}

export default User;
