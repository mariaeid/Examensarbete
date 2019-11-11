import React, { Component } from "react";
import { FiChevronsDown } from "react-icons/fi";
import { IconContext } from "react-icons";
import { Link, AnimateScroll as Scroll } from "react-scroll";

import Auth from "../Auth";

import styles from "./index.module.scss";

class Hero extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videoURL: `${process.env.PUBLIC_URL}/videos/windTurbine.mp4`,
      username: ""
    };
  }

  handle_logout = () => {
    localStorage.removeItem("token");
    this.setState({ logged_in: false, username: "" });
    this.props.history.push("/");
  };

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
            <Auth />
            <Link to="main" spy={true} smooth={true} duration={500}>
              <div className={styles.readMoreContainer}>
                <p className={styles.text}>Läs mer</p>
                <IconContext.Provider value={{ color: "white", size: "2rem" }}>
                  <div>
                    <FiChevronsDown />
                  </div>
                </IconContext.Provider>
              </div>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Hero;
