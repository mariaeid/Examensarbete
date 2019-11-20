import React, { Component } from "react";
import { FiChevronsDown } from "react-icons/fi";
import { IconContext } from "react-icons";
import { Link } from "react-scroll";

import Auth from "../Auth";

import styles from "./index.module.scss";

class Hero extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videoURL: `${process.env.PUBLIC_URL}/videos/forest.mp4`,
      username: ""
    };
  }

  render() {
    return (
      <div className={styles.container} id="top">
        <video id="background-video" loop autoPlay>
          <source src={this.state.videoURL} type="video/mp4" />
          <source src={this.state.videoURL} type="video/ogg" />
          Your browser does not support the video tag.
        </video>
        <div className={styles.fullOverlay}>
          <div className={styles.overlay}>
            <div className={styles.overlayContainer}>
              <p className={styles.title}>Tillsammans förbättrar vi världen</p>
              <Auth />
              <Link to="main" spy={true} smooth={true} duration={500}>
                <div className={styles.readMoreContainer}>
                  <p className={styles.text}>Läs mer</p>
                  <IconContext.Provider
                    value={{ color: "white", size: "2rem" }}
                  >
                    <FiChevronsDown className={styles.icon} />
                  </IconContext.Provider>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Hero;
