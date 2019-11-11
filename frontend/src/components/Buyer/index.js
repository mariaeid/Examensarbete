import React from "react";
import PropTypes from "prop-types";

import styles from "./index.module.scss";

const Buyer = props => {
  return (
    <div className={styles.container}>
      <div className={styles.rowContainer}>
        <p>
          {props.firstName}
          <span>&nbsp;</span>
        </p>
        <p>{props.lastName}</p>
      </div>
      <p>{props.streetAddress}</p>
      <div className={styles.rowContainer}>
        <p>
          {props.zipCode}
          <span>&nbsp;</span>
        </p>
        <p>{props.city}</p>
      </div>
      <p>Tel. {props.phone}</p>
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
