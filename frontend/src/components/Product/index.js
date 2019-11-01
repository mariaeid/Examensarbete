import React from "react";
import PropTypes from "prop-types";

import styles from "./index.module.scss";

const Product = props => {
  return (
    <div className={styles.container}>
      <p>{props.productId}</p>
      <p>{props.name}</p>
      <p>{props.price}</p>
    </div>
  );
};

Product.propTypes = {
  productId: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired
};

export default Product;
