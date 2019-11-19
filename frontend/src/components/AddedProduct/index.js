import React from "react";
import PropTypes from "prop-types";

import styles from "./index.module.scss";

const AddedProduct = props => {
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

AddedProduct.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired
};

export default AddedProduct;
