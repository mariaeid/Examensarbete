import React, { Component } from "react";

import styles from "./index.module.scss";

class ButtonPrimary extends Component {
  render() {
    return <button className={styles.ButtonPrimary}>Logga in säljare</button>;
  }
}

export default ButtonPrimary;
