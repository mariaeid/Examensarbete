import React, { Component } from "react";
import { Redirect } from "react-router";

import Navbar from "../../components/Navbar";
import BuyerForm from "../../components/BuyerForm";
import RegisterBuy from "../../components/RegisterBuy";
import Orders from "../../components/Orders";

import styles from "./index.module.scss";

class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: localStorage.getItem("username"),
      userFirstName: localStorage.getItem("first_name"),
      userLastName: localStorage.getItem("last_name"),
      buyerId: "",
      firstName: "",
      lastName: "",
      streetAddress: "",
      zipCode: "",
      city: "",
      phone: "",
      displayed_form: ""
    };
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
        this.props.history.push({
          pathname: "/buy",
          state: { currentBuyer: this.state.buyerId }
        });
      });
  };

  display_form = form => {
    this.setState({
      displayed_form: form
    });
  };

  render() {
    if (!localStorage.getItem("username")) {
      return <Redirect to="/" />;
    }

    let form;
    switch (this.state.displayed_form) {
      case "buy":
        form = (
          <BuyerForm
            handle_buy={this.handle_buy}
            loggedInUsername={localStorage.getItem("username")}
          />
        );
        break;
      default:
        form = null;
    }
    return (
      <div>
        <Navbar />
        <div className={styles.container}>
          <RegisterBuy display_form={this.display_form} />
          {form}
          <Orders loggedInUsername={this.state.username} />
        </div>
      </div>
    );
  }
}

export default User;
