import React, { Component } from "react";
import PropTypes from "prop-types";
import { withRouter, Link } from "react-router-dom";

import styles from "./index.module.scss";

class SubmitBuy extends Component {
  render() {
    return (
      <div className={styles.submitBuyContainer}>
        <Link to="/">
          <button className={styles.submitBuyButton}>Lägg order</button>
        </Link>
      </div>
    );
  }
}

export default withRouter(SubmitBuy);
