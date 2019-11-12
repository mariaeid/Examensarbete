import React, { Component } from "react";

import styles from "./index.module.scss";

class ButtonPrimary extends Component {
  render() {
    return <button className={styles.buttonPrimary}>Logga in</button>;
  }
}

export default ButtonPrimary;
