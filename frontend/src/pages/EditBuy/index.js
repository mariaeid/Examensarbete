import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { Route, Redirect } from "react-router";

import Logout from "../../components/Logout";
import EditOrder from "../../components/EditOrder";
import EditBuyerForm from "../../components/EditBuyerForm";

import styles from "./index.module.scss";

class EditBuy extends Component {
  constructor(props) {
    super(props);
    // this.updated = true;
    this.state = {
      logged_in: localStorage.getItem("token") ? true : false,
      username: "",
      buyerId: this.props.match.params.currentBuyerId,
      firstName: "",
      last_name: "",
      streetAddress: "",
      zipCode: "",
      city: "",
      phone: ""
    };
  }

  componentDidMount() {
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
            username: json.username
          });
        });
    } else {
      console.log("Not logged in");
    }
    console.log("Detta buyer id", this.state.buyerId);
  }

  handle_logout = () => {
    localStorage.removeItem("token");
    this.setState({ logged_in: false, username: "" });
    this.props.history.push("/");
  };

  render() {
    // if (!this.props.location.state) {
    //   return <Redirect to="/" />;
    // } else {
    return (
      <div className={styles.container}>
        <Logout handle_logout={this.handle_logout} />
        <EditBuyerForm
          // handle_edit_buyer={this.handle_edit_buyer}
          currentBuyer={this.state.buyerId}
        />
      </div>
    );
  }
  // }
}

export default EditBuy;
