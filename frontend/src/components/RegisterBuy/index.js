import React, { Component } from "react";
import PropTypes from "prop-types";

import styles from "./index.module.scss";

class RegisterBuy extends Component {
  render() {
    const registerBuy = (
      <div className={styles.container}>
        <button
          onClick={() => {
            this.props.display_form("buy");
          }}
        >
          Ny beställning
        </button>
      </div>
    );

    return <div>{registerBuy}</div>;
  }
}
export default RegisterBuy;

RegisterBuy.propTypes = {
  display_form: PropTypes.func.isRequired
};
