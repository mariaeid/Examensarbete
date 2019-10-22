import React, { Component } from "react";
import PropTypes from "prop-types";

import styles from "./index.module.scss";

class Modal extends Component {
  onClose = e => {
    this.props.onClose && this.props.onClose(e);
  };

  render() {
    if (!this.props.show) {
      return null;
    }
    return (
      <div className={styles.modal}>
        <div className={styles.content}>{this.props.children}</div>
        <div className={styles.actions}>
          <button
            className={styles.toggleButton}
            onClick={e => {
              this.onClose(e);
            }}
          >
            Close
          </button>
        </div>
      </div>
    );
  }
}

export default Modal;
