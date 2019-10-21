import React, { Component } from "react";

import ButtonSecondary from "../ButtonSecondary";
import ButtonPrimary from "../ButtonPrimary";

import styles from "./index.module.scss";

class Hero extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videoURL: `${process.env.PUBLIC_URL}/videos/windTurbine.mp4`,
      logged_in: localStorage.getItem("token") ? true : false
    };
  }

  render() {
    return (
      <div className={styles.container}>
        <video id="background-video" loop autoPlay>
          <source src={this.state.videoURL} type="video/mp4" />
          <source src={this.state.videoURL} type="video/ogg" />
          Your browser does not support the video tag.
        </video>
        <div className={styles.overlay}>
          <div className={styles.overlayContainer}>
            <p className={styles.title}>Tillsammans förbättrar vi världen</p>
            <div className={styles.buttonContainer}>
              <ButtonSecondary />
              <ButtonPrimary />
            </div>
            <div className={styles.readMoreContainer}>
              <p className={styles.text}>Läs mer</p>
              <img
                src={`${process.env.PUBLIC_URL}/icons/doubleArrows.png`}
                alt="Läs mer"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Hero;
