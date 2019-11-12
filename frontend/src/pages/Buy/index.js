import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { Route, Redirect } from "react-router";

import ButtonLogout from "../../components/ButtonLogout";
import CurrentBuyer from "../../components/CurrentBuyer";
import OrderedProducts from "../../components/OrderedProducts";
import CartForm from "../../components/CartForm";

import styles from "./index.module.scss";

class Buy extends Component {
  constructor(props) {
    super(props);
    // this.updated = true;
    this.state = {
      username: localStorage.getItem("username"),
      buyerId: "",
      productId: "",
      updated: false
    };
  }

  // componentDidMount() {
  //   if (this.state.logged_in) {
  //     console.log("Logged in");
  //     fetch("http://localhost:8000/core/current_user/", {
  //       headers: {
  //         Authorization: `JWT ${localStorage.getItem("token")}`
  //       }
  //     })
  //       .then(res => res.json())
  //       .then(json => {
  //         this.setState({
  //           username: json.username
  //         });
  //       });
  //   } else {
  //     console.log("Not logged in");
  //   }
  //
  //   console.log("Logged in Register Buy", this.state.logged_in);
  // }

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

  render() {
    if (!localStorage.getItem("access_token")) {
      return <Redirect to="/" />;
    }

    return (
      <div className={styles.container}>
        <ButtonLogout />
        <h4 className={styles.buyerTitle}>Köpare</h4>
        <CurrentBuyer currentBuyer={this.props.location.state.currentBuyer} />
        <CartForm
          currentBuyer={this.props.location.state.currentBuyer}
          handle_cart={this.handle_cart}
          // handle_update_cart={this.handle_update_cart}
        />
        <OrderedProducts
          currentBuyer={this.props.location.state.currentBuyer}
        />
      </div>
    );
  }
}

export default withRouter(Buy);

// console.log(this.state.username);
// if (!this.state.username) {
//   return <Redirect to="/" />;
// } else {
//
//
//
