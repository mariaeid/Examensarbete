import React, { Component } from "react";
import axios from "axios";

import AddedProduct from "../AddedProduct";
import { serverAddress } from "../../config.js";

const base_url = serverAddress;

class AddedProducts extends Component {
  state = {
    products: [],
    carts: []
  };

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
  }

  render() {
    const cartFilter = array => {
      return array.filter(cart => {
        if (cart.buyerId === this.props.currentBuyer) {
          return true;
        }
        return false;
      });
    };

    const filteredItems = cartFilter(this.state.carts).map(cart => {
      return this.state.products.map(product => {
        if (product.productId === cart.productId) {
          return (
            <AddedProduct
              key={product.productId}
              name={product.name}
              price={product.price}
            />
          );
        } else return null;
      });
    });

    return <div>{filteredItems}</div>;
  }
}

export default AddedProducts;
