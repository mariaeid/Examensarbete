import React, { Component } from "react";

import Buyer from "../Buyer";

class Buyers extends Component {
  state = {
    buyers: []
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
