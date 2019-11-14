import React from "react";
import PropTypes from "prop-types";

import styles from "./index.module.scss";

const Step = props => {
  return (
    <div className={styles.container}>
      <img src={props.icon} alt={props.number} />
      <p className={styles.title}>{props.title}</p>
      <p className={styles.description}>{props.description}</p>
    </div>
  );
};

Step.propTypes = {
  icon: PropTypes.string.isRequired,
  number: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
};

export default Step;
