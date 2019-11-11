import React, { Component } from "react";

import ButtonLogout from "../../components/ButtonLogout";
import BuyerForm from "../../components/BuyerForm";
import RegisterBuy from "../../components/RegisterBuy";
import Orders from "../../components/Orders";

import styles from "./index.module.scss";

class User extends Component {
  _isMounted = false;
  constructor(props) {
    super(props);
    this.state = {
      logged_in: localStorage.getItem("token") ? true : false,
      username: "",
      userFirstName: "",
      userLastName: "",
      userEmail: "",
      firstName: "",
      lastName: "",
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
      console.log("Logged in");
      fetch("http://localhost:8000/core/current_user/", {
        headers: {
          Authorization: `JWT ${localStorage.getItem("token")}`
        }
      })
        .then(res => res.json())
        .then(json => {
          this.setState({
            username: json.username,
            userFirstName: json.firstName,
            userLastName: json.lastName,
            userEmail: json.email
          });
        });
    } else {
      console.log("Not logged in");
    }
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
      .then(() => {
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
      <div className={styles.container}>
        <ButtonLogout handle_logout={this.handle_logout} />
        <p>
          Hello, {this.state.userFirstName} {this.state.userLastName}
        </p>
        <RegisterBuy display_form={this.display_form} />
        {form}
        <Orders loggedInUsername={this.state.username} />
      </div>
    );
  }
}

export default User;
