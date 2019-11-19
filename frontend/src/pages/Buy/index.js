import React, { Component } from "react";
import { Redirect } from "react-router";

import Logout from "../../components/Logout";
import CurrentBuyer from "../../components/CurrentBuyer";
import AddedProducts from "../../components/AddedProducts";
import CartForm from "../../components/CartForm";
import SubmitBuy from "../../components/SubmitBuy";

import styles from "./index.module.scss";

class Buy extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: localStorage.getItem("username"),
      buyerId: "",
      productId: ""
    };
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

  render() {
    if (!localStorage.getItem("username")) {
      return <Redirect to="/" />;
    }

    return (
      <div className={styles.container}>
        <Logout />
        <div className={styles.mainContainer}>
          <h4 className={styles.buyerTitle}>Köpare</h4>
          <CurrentBuyer currentBuyer={this.props.location.state.currentBuyer} />
          <CartForm
            currentBuyer={this.props.location.state.currentBuyer}
            handle_cart={this.handle_cart}
          />
          <AddedProducts
            currentBuyer={this.props.location.state.currentBuyer}
          />
        </div>
        <SubmitBuy />
      </div>
    );
  }
}

export default Buy;
