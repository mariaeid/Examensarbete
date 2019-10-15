import React, { Component } from "react";

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
      <div>
        {this.state.projects.map((project, key) => (
          <ProjectSummary
            key={key}
            title={project.title}
            intro={project.intro}
            fullDescription={project.fullDescription}
            image={project.image}
          />
        ))}
      </div>
    );
  }
}

export default Projects;
