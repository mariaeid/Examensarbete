import React, { Component } from "react";

import styles from "./index.module.scss";

class EditBuyerForm extends Component {
  state = {
    logged_in: localStorage.getItem("token") ? true : false,
    buyers: []
  };

  async componentDidMount() {
    if (this.state.logged_in) {
      console.log("Logged in");
      fetch("http://localhost:8000/core/current_user/", {
        headers: {
          Authorization: `JWT ${localStorage.getItem("token")}`
        }
      })
        .then(res => res.json())
        .then(json => {
          this.setState({
            username: json.username
          });
        });
    } else {
      console.log("Not logged in");
    }
    console.log("Detta buyer id", this.state.buyerId);
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

  handle_change = e => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState(prevstate => {
      const newState = { ...prevstate };
      newState[name] = value;
      return newState;
    });
  };

  handle_edit_buyer = (e, data) => {
    console.log("Denna data att posta", data);
    e.preventDefault();
    fetch(`http://127.0.0.1:8000/api/buyer/${data.buyerId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(json => {
        this.setState({
          firstName: json.firstName,
          last_name: json.lastName,
          streetAddress: json.streeAddress,
          zipCode: json.zipCode,
          city: json.city,
          phone: json.phone,
          buyerId: json.buyerId
        });
      });
  };

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
            <div className={styles.container}>
              <form
                onSubmit={e => this.handle_edit_buyer(e, this.state)}
                key={buyer.id}
              >
                <h4>Köpare</h4>
                <label htmlFor="firstName">Förnamn</label>
                <input
                  type="text"
                  name="firstName"
                  defaultValue={buyer.firstName}
                  value={this.state.firstName}
                  onChange={this.handle_change}
                />
                <label htmlFor="lastName">Efternamn</label>
                <input
                  type="text"
                  name="lastName"
                  value={this.state.lastName}
                  onChange={this.handle_change}
                  placeholder={buyer.lastName}
                />
                <label htmlFor="streetAddress">Gatuadress</label>
                <input
                  type="text"
                  name="streetAddress"
                  value={this.state.streetAddress}
                  onChange={this.handle_change}
                  placeholder={buyer.streetAddress}
                />
                <label htmlFor="zipCode">Postkod</label>
                <input
                  type="text"
                  name="zipCode"
                  value={this.state.zipCode}
                  onChange={this.handle_change}
                  placeholder={buyer.zipCode}
                />
                <label htmlFor="city">Stad</label>
                <input
                  type="text"
                  name="city"
                  value={this.state.city}
                  onChange={this.handle_change}
                  placeholder={buyer.city}
                />
                <label htmlFor="phone">Telefon</label>
                <input
                  type="tel"
                  name="phone"
                  value={this.state.phone}
                  onChange={this.handle_change}
                  placeholder={buyer.phone}
                />
                <input type="hidden" name="username" value={buyer.username} />
                <input type="hidden" name="buyerId" value={buyer.buyerId} />
                <input type="submit" value="Spara kunduppgifter" />
              </form>
            </div>
          );
        })}
      </div>
    );
  }
}

export default EditBuyerForm;
