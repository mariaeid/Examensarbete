import React from "react";
import PropTypes from "prop-types";

import styles from "./index.module.scss";

const ProjectSummary = props => {
  return (
    <div className={styles.container}>
      <img src={props.image} alt={props.title} />
      <h1>{props.title}</h1>
      <p>{props.intro}</p>
    </div>
  );
};

ProjectSummary.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  intro: PropTypes.string.isRequired
};

export default ProjectSummary;
