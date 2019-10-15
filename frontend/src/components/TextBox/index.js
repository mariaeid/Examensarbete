import React from "react";
import PropTypes from "prop-types";

import styles from "./index.module.scss";

const TextBox = props => {
  return (
    <div className={styles.container}>
      <p className={styles.title}>{props.title}</p>
      <p className={styles.description}>{props.description}</p>
    </div>
  );
};

TextBox.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
};

export default TextBox;
