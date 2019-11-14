import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-scroll";
import { IconContext } from "react-icons";
import { IoLogoFacebook } from "react-icons/io";
import { IoLogoTwitter } from "react-icons/io";
import { IoLogoInstagram } from "react-icons/io";
import { IoLogoLinkedin } from "react-icons/io";

import styles from "./index.module.scss";

const Footer = props => {
  return (
    <div className={styles.footerContainer}>
      <Link
        to="top"
        spy={true}
        smooth={true}
        duration={500}
        className={styles.upText}
      >
        <p>{props.upText}</p>
      </Link>
      <p className={styles.titleText}>{props.title}</p>
      <div className={styles.iconsContainer}>
        <div className={styles.iconContainer}>
          <IconContext.Provider value={{ color: "white", size: "1.5rem" }}>
            <IoLogoFacebook />
          </IconContext.Provider>
          <p>Facebook</p>
        </div>
        <div className={styles.iconContainer}>
          <IconContext.Provider value={{ color: "white", size: "1.5rem" }}>
            <IoLogoTwitter />
          </IconContext.Provider>
          <p>Twitter</p>
        </div>
        <div className={styles.iconContainer}>
          <IconContext.Provider value={{ color: "white", size: "1.5rem" }}>
            <IoLogoInstagram />
          </IconContext.Provider>
          <p>Instagram</p>
        </div>
        <div className={styles.iconContainer}>
          <IconContext.Provider value={{ color: "white", size: "1.5rem" }}>
            <IoLogoLinkedin />
          </IconContext.Provider>
          <p>LinkedIn</p>
        </div>
      </div>
    </div>
  );
};

Footer.propTypes = {
  title: PropTypes.string.isRequired,
  upText: PropTypes.string.isRequired
};

export default Footer;
