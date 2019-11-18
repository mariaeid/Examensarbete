import React, { Component } from "react";
import axios from "axios";

import Buyer from "../Buyer";
import Product from "../Product";
import { serverAddress } from "../../config.js";

import styles from "./index.module.scss";

const base_url = serverAddress;

class Orders extends Component {
  constructor(props) {
    super(props);
    this.state = {
      carts: [],
      products: [],
      buyers: [],
      buyerId: ""
    };
    this.getProductIdsForBuyerFromCart = this.getProductIdsForBuyerFromCart.bind(
      this
    );
  }

  async componentDidMount() {
    try {
      axios.get(base_url + "/api/cart").then(res => {
        this.setState({
          carts: res.data
        });
      });
    } catch (e) {
      console.log("Error", e);
    }

    try {
      axios.get(base_url + "/api/product").then(res => {
        this.setState({
          products: res.data
        });
      });
    } catch (e) {
      console.log("Error", e);
    }

    try {
      axios.get(base_url + "/api/buyer").then(res => {
        this.setState({
          buyers: res.data
        });
      });
    } catch (e) {
      console.log("Error", e);
    }
  }

  getProductIdsForBuyerFromCart(buyerId) {
    return this.state.carts.map(cart => {
      return this.state.products.map(product => {
        if (cart.buyerId === buyerId && cart.productId === product.productId) {
          return (
            <div key={product.productId}>
              <Product
                key={cart.productId}
                name={product.name}
                price={product.price}
              />
            </div>
          );
        } else return null;
      });
    });
  }

  render() {
    const buyerFilter = array => {
      return array.filter(buyer => {
        if (buyer.sellerName === this.props.loggedInUsername) {
          return true;
        }
        return false;
      });
    };

    const filteredItems = buyerFilter(this.state.buyers).map(buyer => {
      return (
        <div className={styles.ordersContainer}>
          <div key={buyer.buyerId} className={styles.orderContainer}>
            <p className={styles.buyerText}>Köpare:</p>
            <Buyer
              firstName={buyer.firstName}
              lastName={buyer.lastName}
              streetAddress={buyer.streetAddress}
              zipCode={buyer.zipCode}
              city={buyer.city}
              phone={buyer.phone}
            />
            <div className={styles.productInfo}>
              <p>Namn</p>
              <p>Pris</p>
            </div>
            {this.getProductIdsForBuyerFromCart(buyer.buyerId)}
          </div>
        </div>
      );
    });

    return <div className={styles.container}>{filteredItems}</div>;
  }
}
export default Orders;
