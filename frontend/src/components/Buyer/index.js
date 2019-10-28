import React from "react";
import PropTypes from "prop-types";

import styles from "./index.module.scss";

const Buyer = props => {
  return (
    <div className={styles.container}>
      <p>{props.firstName}</p>
      <p>{props.lastName}</p>
      <p>{props.streetAddress}</p>
      <p>{props.zipCode}</p>
      <p>{props.city}</p>
      <p>{props.phone}</p>
    </div>
  );
};

Buyer.propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  streetAddress: PropTypes.string.isRequired,
  zipCode: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired
};

export default Buyer;
