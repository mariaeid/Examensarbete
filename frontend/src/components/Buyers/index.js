import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { Route, Redirect } from "react-router";

import Buyer from "../Buyer";

import styles from "./index.module.scss";

class Buyers extends Component {
  state = {
    buyers: [],
    buyerId: ""
  };

  async componentDidMount() {
    try {
      const res = await fetch("http://127.0.0.1:8000/api/buyer");
      const buyers = await res.json();
      this.setState({
        buyers
      });
    } catch (e) {
      console.log(e);
    }
  }

  // handle_edit = () => {
  //   this.props.history.push({
  //     pathname: "/editBuy"
  //     // state: {yourCalculatedData: data}
  //   });
  // };

  display_form = form => {
    this.setState({
      displayed_form: form
    });
  };

  render() {
    const buyerFilter = array => {
      return array.filter(buyer => {
        if (buyer.username === this.props.loggedInUsername) {
          return true;
        }
        return false;
      });
    };

    return (
      <div>
        {buyerFilter(this.state.buyers).map(buyer => {
          return (
            <div>
              <Buyer
                key={buyer.id}
                firstName={buyer.firstName}
                lastName={buyer.lastName}
                streetAddress={buyer.streetAddress}
                zipCode={buyer.zipCode}
                city={buyer.city}
                phone={buyer.phone}
              />

              <button onClick={this.handle_edit}>Ändra</button>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Buyers;
