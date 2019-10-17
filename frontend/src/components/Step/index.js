import React from "react";
import PropTypes from "prop-types";

import styles from "./index.module.scss";

const Step = props => {
  return (
    <div>
      <p className={styles.title}>{props.title}</p>
      <p className={styles.description}>{props.description}</p>
    </div>
  );
};

Step.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
};

export default Step;
