import React, { Component } from "react";

import AddedProduct from "../AddedProduct";

class AddedProducts extends Component {
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
