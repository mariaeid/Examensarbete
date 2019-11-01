import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { Route, Redirect } from "react-router";

import ButtonLogout from "../../components/ButtonLogout";
import Buyers from "../../components/Buyers";
import BuyerForm from "../../components/BuyerForm";
import RegisterBuy from "../../components/RegisterBuy";

class User extends Component {
  _isMounted = false;
  constructor(props) {
    super(props);
    this.state = {
      logged_in: localStorage.getItem("token") ? true : false,
      username: "",
      firstName: "",
      last_name: "",
      streetAddress: "",
      zipCode: "",
      city: "",
      phone: "",
      buyerId: ""
    };
  }

  componentDidMount() {
    this._isMounted = true;
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
    console.log("Logged in User", this.state.logged_in);
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  handle_logout = () => {
    localStorage.removeItem("token");
    this.setState({ logged_in: false, username: "" });
    this.props.history.push("/");
  };

  handle_buy = (e, data) => {
    console.log(data);
    e.preventDefault();
    fetch("http://127.0.0.1:8000/api/buyer/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(json => {
        this.setState({
          firstName: json.firstName,
          last_name: json.lastName,
          streetAddress: json.streeAddress,
          zipCode: json.zipCode,
          city: json.city,
          phone: json.phone,
          buyerId: json.buyerId,
          displayed_form: ""
        });
      })
      .then(x => {
        if (this._isMounted) {
          this.props.history.push({
            pathname: "/buy",
            state: { currentBuyer: this.state.buyerId }
          });
        }
      });
  };

  display_form = form => {
    this.setState({
      displayed_form: form
    });
  };

  render() {
    let form;
    switch (this.state.displayed_form) {
      case "buy":
        form = (
          <BuyerForm
            handle_buy={this.handle_buy}
            loggedInUsername={this.state.username}
          />
        );
        break;
      default:
        form = null;
    }
    return (
      <div>
        <ButtonLogout handle_logout={this.handle_logout} />
        <p>Hello, {this.state.username}</p>
        <RegisterBuy display_form={this.display_form} />
        {form}
        <Buyers loggedInUsername={this.state.username} />
      </div>
    );
  }
}

export default User;
