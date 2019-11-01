import React, { Component } from "react";
import { IconContext } from "react-icons";
import { FiChevronRight } from "react-icons/fi";

import ProjectSummary from "../ProjectSummary";

import styles from "./index.module.scss";

class Projects extends Component {
  state = {
    projects: []
  };

  async componentDidMount() {
    try {
      const res = await fetch(
        "http://127.0.0.1:8000/api/environmentalProjects"
      ); // fetching the data from api, before the page loaded
      const projects = await res.json();
      this.setState({
        projects
      });
    } catch (e) {
      console.log(e);
    }
  }

  render() {
    return (
      <div className={styles.container}>
        <div className={styles.projectsContainer}>
          {this.state.projects.map(project => (
            <ProjectSummary
              key={project.id}
              title={project.title}
              intro={project.intro}
              fullDescription={project.fullDescription}
              image={project.image}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Projects;

// <div className={styles.iconContainer}>
// <IconContext.Provider value={{ color: "black", size: "4rem" }}>
// <div className={styles.icon}>
// <FiChevronRight onClick={this.handleRightClicked} />
// </div>
// </IconContext.Provider>
// </div>
