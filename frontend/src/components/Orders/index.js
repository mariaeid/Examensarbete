import React, { Component } from "react";
import { NavLink } from "react-router-dom";

import Buyer from "../Buyer";
import Product from "../Product";

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
    let cartsData;
    let productsData;
    let buyersData;
    try {
      const resProd = await fetch("http://127.0.0.1:8000/api/cart");
      const carts = await resProd.json();
      cartsData = carts;
    } finally {
      // console.log("CartData");
    }

    try {
      const resProd = await fetch("http://127.0.0.1:8000/api/product");
      const products = await resProd.json();
      productsData = products;
    } finally {
      // console.log("ProductsData");
    }

    try {
      const resProd = await fetch("http://127.0.0.1:8000/api/buyer");
      const buyers = await resProd.json();
      buyersData = buyers;
    } finally {
      // console.log("buyersData");
    }
    this.setState({
      carts: cartsData,
      products: productsData,
      buyers: buyersData
    });
  }

  getProductIdsForBuyerFromCart(buyerId) {
    return this.state.carts.map(cart => {
      return this.state.products.map(product => {
        if (cart.buyerId === buyerId)
          if (cart.productId === product.productId) {
            return (
              <div key={product.productId}>
                <Product
                  productId={cart.productId}
                  name={product.name}
                  price={product.price}
                />
              </div>
            );
          }
      });
    });
  }

  render() {
    const buyerFilter = array => {
      return array.filter(buyer => {
        if (buyer.username === this.props.loggedInUsername) {
          return true;
        }
        return false;
      });
    };

    const filteredItems = buyerFilter(this.state.buyers).map(buyer => {
      return (
        <div key={buyer.buyerId}>
          <Buyer
            firstName={buyer.firstName}
            lastName={buyer.lastName}
            streetAddress={buyer.streetAddress}
            zipCode={buyer.zipCode}
            city={buyer.city}
            phone={buyer.phone}
          />
          {this.getProductIdsForBuyerFromCart(buyer.buyerId)}
          <NavLink to={`editBuy/${buyer.buyerId}`}>Ändra</NavLink>
        </div>
      );
    });

    return <div>{filteredItems}</div>;
  }
}
export default Orders;
