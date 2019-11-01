import React from "react";
import PropTypes from "prop-types";

import styles from "./index.module.scss";

class CartForm extends React.Component {
  constructor() {
    super();

    this.state = {
      productId: "",
      buyerId: ""
    };
  }

  componentDidMount() {
    this.setState({
      buyerId: this.props.currentBuyer
    });
  }

  handle_change = e => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState(prevstate => {
      const newState = { ...prevstate };
      newState[name] = value;
      return newState;
    });
  };

  render() {
    return (
      <div className={styles.container}>
        <form onSubmit={e => this.props.handle_cart(e, this.state)}>
          <h4>Lägg till i varukorg</h4>
          <label htmlFor="firstName">Produktnummer</label>
          <input
            type="number"
            name="productId"
            value={this.state.productId}
            onChange={this.handle_change}
          />
          <input type="hidden" name="buyerId" value={this.state.buyerId} />
          <input type="submit" value="Lägg till" />
        </form>
      </div>
    );
  }
}

export default CartForm;

CartForm.propTypes = {
  handle_cart: PropTypes.func.isRequired
};
