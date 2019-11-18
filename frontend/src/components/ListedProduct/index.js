import React from "react";
import PropTypes from "prop-types";

import styles from "./index.module.scss";

const Product = props => {
  return (
    <div className={styles.productContainer}>
      <div className={styles.productDetails}>
        <p className={styles.productName}>{props.name}</p>
        <p>
          {props.numberText}
          {props.number}
        </p>
        <p>
          {props.price}
          {props.currency}
        </p>
      </div>
      <img className={styles.productImage} src={props.image} alt={props.name} />
    </div>
  );
};

Product.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  currency: PropTypes.string.isRequired,
  number: PropTypes.number.isRequired,
  numberText: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired
};

export default Product;
