import React, { Component } from "react";
import PropTypes from "prop-types";
import ReactDOM from "react-dom";

import Modal from "../Modal";

class Navbar extends Component {
  state = {
    show: false
  };
  showModal = e => {
    this.setState({
      show: !this.state.show
    });
  };

  onClose = e => {
    this.props.show = false;
  };

  hideModal() {
    this.setState({ show: false });
  }

  render() {
    const logged_out_nav = (
      <ul>
        <li
          onClick={() => {
            this.props.display_form("login");
            this.showModal();
          }}
        >
          Logga in
        </li>
        <li onClick={() => this.props.display_form("signup")}>
          Skapa användare
        </li>
      </ul>
    );

    const logged_in_nav = (
      <ul>
        <li onClick={this.props.handle_logout}>Logga ut</li>
      </ul>
    );
    return (
      <div>
        <div>{this.props.logged_in ? logged_in_nav : logged_out_nav}</div>
        <Modal onClose={this.showModal} show={this.state.show}>
          Message in modal
        </Modal>
        <button
          onClick={e => {
            this.showModal();
          }}
        >
          {" "}
          show Modal{" "}
        </button>
      </div>
    );
  }
}
export default Navbar;

Navbar.propTypes = {
  logged_in: PropTypes.bool.isRequired,
  display_form: PropTypes.func.isRequired,
  handle_logout: PropTypes.func.isRequired
};
