import React from "react";
import PropTypes from "prop-types";

import styles from "./index.module.scss";

const Product = props => {
  return (
    <div className={styles.container}>
      <p>{props.name}</p>
      <p>{props.price}</p>
    </div>
  );
};

Product.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired
};

export default Product;
