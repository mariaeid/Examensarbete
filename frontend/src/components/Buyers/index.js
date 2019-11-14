import React, { Component } from "react";
import axios from "axios";

import Buyer from "../Buyer";
import { serverAddress } from "../../config.js";

const base_url = serverAddress;

class Buyers extends Component {
  state = {
    buyers: [],
    buyerId: ""
  };

  async componentDidMount() {
    try {
      axios.get(base_url + "/api/buyer").then(res => {
        this.setState({
          buyers: res.data
        });
      });
    } catch (e) {
      console.log("Error", e);
    }
  }

  display_form = form => {
    this.setState({
      displayed_form: form
    });
  };

  render() {
    const buyerFilter = array => {
      return array.filter(buyer => {
        if (buyer.sellerName === this.props.loggedInUsername) {
          return true;
        }
        return false;
      });
    };

    return (
      <div>
        {buyerFilter(this.state.buyers).map(buyer => {
          return (
            <Buyer
              key={buyer.buyerId}
              firstName={buyer.firstName}
              lastName={buyer.lastName}
              streetAddress={buyer.streetAddress}
              zipCode={buyer.zipCode}
              city={buyer.city}
              phone={buyer.phone}
            />
          );
        })}
      </div>
    );
  }
}

export default Buyers;
