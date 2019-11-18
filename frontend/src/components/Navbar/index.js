import React, { Component } from "react";
import { withRouter, NavLink } from "react-router-dom";

import Logout from "../Logout";

import styles from "./index.module.scss";

class Navbar extends Component {
  render() {
    return (
      <div className={styles.navContainer}>
        <div className={styles.navLinkContainer}>
          <NavLink
            to="/user"
            className={styles.link}
            activeClassName={styles.activeLink}
          >
            Lägg order
          </NavLink>
          <NavLink
            to="/products"
            className={styles.link}
            activeClassName={styles.activeLink}
          >
            Produkter
          </NavLink>
        </div>
        <div className={styles.logoutContainer}>
          <Logout />
        </div>
      </div>
    );
  }
}

export default withRouter(Navbar);
