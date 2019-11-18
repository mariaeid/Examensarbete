import React, { Component } from "react";

import Navbar from "../Navbar";
import ListedProduct from "../ListedProduct";

import styles from "./index.module.scss";

class ListedProducts extends Component {
  state = {
    products: []
  };

  async componentDidMount() {
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
    return (
      <div>
        <Navbar />
        <div className={styles.productsContainer}>
          {this.state.products.map(product => (
            <ListedProduct
              key={product.productId}
              name={product.name}
              price={product.price}
              currency="kr"
              number={product.productId}
              numberText="Artikelnummer: "
              image={product.image}
            />
          ))}
        </div>
      </div>
    );
  }
}
export default ListedProducts;
