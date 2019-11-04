import React, { Component } from "react";

import Product from "../Product";

import styles from "./index.module.scss";

class Products extends Component {
  state = {
    products: [],
    carts: []
  };

  async componentDidMount() {
    try {
      const res = await fetch("http://127.0.0.1:8000/api/cart");
      const carts = await res.json();
      this.setState({
        carts
      });
    } catch (e) {
      console.log(e);
    }
    try {
      const resProd = await fetch("http://127.0.0.1:8000/api/product");
      const products = await resProd.json();
      this.setState({
        products
      });
    } catch (e) {
      console.log(e);
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
              productId={cart.productId}
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
