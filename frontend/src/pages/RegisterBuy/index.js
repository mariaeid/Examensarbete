import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { Route, Redirect } from "react-router";

import ButtonLogout from "../../components/ButtonLogout";
import CurrentBuyer from "../../components/CurrentBuyer";
import Products from "../../components/Products";
import CartForm from "../../components/CartForm";

class User extends Component {
  constructor(props) {
    super(props);
    // this.updated = true;
    this.state = {
      logged_in: localStorage.getItem("token") ? true : false,
      username: "",
      buyerId: "",
      productId: "",
      updated: false
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

    console.log("Logged in Register Buy", this.state.logged_in);
  }

  handle_cart = (e, data) => {
    e.preventDefault();
    fetch("http://127.0.0.1:8000/api/cart/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(json => {
        this.setState({
          productId: json.productId,
          buyerId: json.buyerId
        });
      });
    window.location.reload();
  };

  // handle_update_cart = e => {
  //   e.preventDefault();
  //   fetch("http://127.0.0.1:8000/api/cart")
  //     .then(res => res.json())
  //     .then(json => {
  //       this.setState({
  //         productId: json.productId,
  //         buyerId: json.buyerId
  //       });
  //     });
  //   console.log("UPDATED", this.state.productId);
  // };

  handle_logout = () => {
    localStorage.removeItem("token");
    this.setState({ logged_in: false, username: "" });
    this.props.history.push("/");
  };

  render() {
    if (!this.props.location.state) {
      return <Redirect to="/" />;
    } else {
      return (
        <div>
          <ButtonLogout handle_logout={this.handle_logout} />
          <CurrentBuyer currentBuyer={this.props.location.state.currentBuyer} />
          <CartForm
            currentBuyer={this.props.location.state.currentBuyer}
            handle_cart={this.handle_cart}
            // handle_update_cart={this.handle_update_cart}
          />
          <Products currentBuyer={this.props.location.state.currentBuyer} />
        </div>
      );
    }
  }
}

export default User;
