import React from "react";
import PropTypes from "prop-types";

import styles from "./index.module.scss";

const Project = props => {
  return (
    <div className={styles.card}>
      <img src={props.image} alt={props.title} />
      <div className={styles.textContainer}>
        <p className={styles.title}>{props.title}</p>
        <p>{props.intro}</p>
        <p>{props.fullDescription}</p>
      </div>
    </div>
  );
};

Project.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  intro: PropTypes.string.isRequired,
  fullDescription: PropTypes.string.isRequired
};

export default Project;
