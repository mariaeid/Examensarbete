import React, { Component } from "react";
import { Route, Redirect } from "react-router";

import ButtonLogout from "../../components/ButtonLogout";
import BuyerForm from "../../components/BuyerForm";
import RegisterBuy from "../../components/RegisterBuy";
import Orders from "../../components/Orders";
import { handle_logout } from "../../utils/JWTAuth.js";

import styles from "./index.module.scss";

class User extends Component {
  // _isMounted = false;
  constructor(props) {
    super(props);
    this.state = {
      // logged_in: localStorage.getItem("token") ? true : false,
      username: localStorage.getItem("username"),
      userFirstName: localStorage.getItem("firstName"),
      userLastName: localStorage.getItem("lastName"),
      buyerId: "",
      firstName: "",
      lastName: "",
      streetAddress: "",
      zipCode: "",
      city: "",
      phone: "",
      buyerId: "",
      displayed_form: ""
    };
    this.handle_logout = this.handle_logout.bind(this);
  }

  componentDidMount() {
    console.log("Username from User", this.state.username);
    console.log("firstName from User", this.state.userFirstName);
    // this._isMounted = true;
  }

  // componentWillUnmount() {
  //   this._isMounted = false;
  // }

  handle_logout(e) {
    handle_logout();
    // this.setState({ username: "" });
    this.props.history.push("/");
  }

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
          lastName: json.lastName,
          streetAddress: json.streeAddress,
          zipCode: json.zipCode,
          city: json.city,
          phone: json.phone,
          buyerId: json.buyerId,
          displayed_form: ""
        });
      })
      .then(() => {
        // if (this._isMounted) {
        this.props.history.push({
          pathname: "/buy",
          state: { currentBuyer: this.state.buyerId }
        });
        // }
      });
  };

  display_form = form => {
    this.setState({
      displayed_form: form
    });
  };

  render() {
    // if (!localStorage.getItem("access_token")) {
    //   return <Redirect to="/" />;
    // }
    //
    // if (!localStorage.getItem("username")) {
    //   return <Redirect to="/" />;
    // }
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
      <div className={styles.container}>
        <ButtonLogout handle_logout={this.handle_logout} />
        <p>
          Hello, {localStorage.getItem("firstName")} {this.state.userLastName}
        </p>
        <RegisterBuy display_form={this.display_form} />
        {form}
        <Orders loggedInUsername={this.state.username} />
      </div>
    );
  }
}

export default User;
