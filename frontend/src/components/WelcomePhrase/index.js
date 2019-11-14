import React from "react";
import PropTypes from "prop-types";

import styles from "./index.module.scss";

const WelcomePhrase = props => {
  return <p className={styles.newUserText}>{props.text}</p>;
};

export default WelcomePhrase;

WelcomePhrase.propTypes = {
  text: PropTypes.string.isRequired
};
