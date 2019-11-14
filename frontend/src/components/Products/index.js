import React, { Component } from "react";
import axios from "axios";

import Product from "../Product";
import { serverAddress } from "../../config.js";

const base_url = serverAddress;

class Products extends Component {
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
            <Product
              key={cart.id}
              key={product.id}
              name={product.name}
              price={product.price}
            />
          );
        }
      });
    });

    return <div>{filteredItems}</div>;
  }
}

export default Products;
