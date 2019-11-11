import React from "react";
import PropTypes from "prop-types";

import styles from "./index.module.scss";

const OrderedProduct = props => {
  return (
    <div className={styles.container}>
      <p>
        {props.name}
        <span>,&nbsp;</span>
      </p>
      <p>{props.price}</p>
      <p>kr</p>
    </div>
  );
};

OrderedProduct.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired
};

export default OrderedProduct;
