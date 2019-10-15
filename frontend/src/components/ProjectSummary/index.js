import React from "react";
import PropTypes from "prop-types";

import styles from "./index.module.scss";

const ProjectSummary = props => {
  return (
    <div className={styles.card}>
      <img src={props.image} alt={props.title} />
      <div className={styles.textContainer}>
        <p className={styles.title}>{props.title}</p>
        <p>{props.intro}</p>
        <button>Läs mer</button>
      </div>
    </div>
  );
};

ProjectSummary.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  intro: PropTypes.string.isRequired
};

export default ProjectSummary;
