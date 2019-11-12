import React, { Component } from "react";
import PropTypes from "prop-types";

import styles from "./index.module.scss";

const ButtonSecondary = props => {
  return <button className={styles.buttonSecondary}>{props.buttonText}</button>;
};

export default ButtonSecondary;
