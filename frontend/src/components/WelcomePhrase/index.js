import React from "react";
import PropTypes from "prop-types";

import styles from "./index.module.scss";

const WelcomePhrase = props => {
  return <p className={styles.newUserText}>{props.text}</p>;
};

WelcomePhrase.propTypes = {
  text: PropTypes.string.isRequired
};

export default WelcomePhrase;
