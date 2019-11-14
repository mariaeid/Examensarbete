import React, { Component } from "react";
import axios from "axios";

import Buyer from "../Buyer";
import { serverAddress } from "../../config.js";

const base_url = serverAddress;

class Buyers extends Component {
  state = {
    buyers: []
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

  render() {
    const buyerFilter = array => {
      return array.filter(buyer => {
        if (buyer.buyerId === parseInt(this.props.currentBuyer, 10)) {
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
              buyerId={buyer.buyerId}
            />
          );
        })}
      </div>
    );
  }
}

export default Buyers;
