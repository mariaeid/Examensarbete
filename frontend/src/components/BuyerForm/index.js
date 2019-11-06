import React from "react";
import PropTypes from "prop-types";

import styles from "./index.module.scss";

class BuyerForm extends React.Component {
  constructor() {
    super();
    // this.show = true;
    this.state = {
      firstName: "",
      lastName: "",
      streetAddress: "",
      zipCode: "",
      city: "",
      phone: "",
      username: "",
      buyerId: ""
    };
  }

  generateRandomNumber = () => {
    let randomNumber =
      Math.floor(Math.random() * (9999999 - 9000000 + 1)) + 9000000;
    this.setState({
      buyerId: randomNumber
    });
  };
  componentDidMount() {
    this.generateRandomNumber();
    this.setState({
      username: this.props.loggedInUsername
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

  // onClose = () => {
  //   this.show = false;
  //   this.forceUpdate();
  // };

  render() {
    //   if (!this.show) {
    //     this.show = !this.show;
    //     return null;
    // }
    return (
      <div className={styles.container}>
        <form onSubmit={e => this.props.handle_buy(e, this.state)}>
          <h4>Köpare</h4>
          <label htmlFor="firstName">Förnamn</label>
          <input
            type="text"
            name="firstName"
            value={this.state.firstName}
            onChange={this.handle_change}
          />
          <label htmlFor="lastName">Efternamn</label>
          <input
            type="text"
            name="lastName"
            value={this.state.lastName}
            onChange={this.handle_change}
          />
          <label htmlFor="streetAddress">Gatuadress</label>
          <input
            type="text"
            name="streetAddress"
            value={this.state.streetAddress}
            onChange={this.handle_change}
          />
          <label htmlFor="zipCode">Postkod</label>
          <input
            type="text"
            name="zipCode"
            value={this.state.zipCode}
            onChange={this.handle_change}
          />
          <label htmlFor="city">Stad</label>
          <input
            type="text"
            name="city"
            value={this.state.city}
            onChange={this.handle_change}
          />
          <label htmlFor="phone">Telefon</label>
          <input
            type="tel"
            name="phone"
            value={this.state.phone}
            onChange={this.handle_change}
          />
          <input type="hidden" name="username" value={this.state.username} />
          <input type="hidden" name="buyerId" value={this.state.buyerId} />
          <input type="submit" value="Spara kunduppgifter" />
        </form>
      </div>
    );
  }
}

export default BuyerForm;

BuyerForm.propTypes = {
  handle_buy: PropTypes.func.isRequired
};
