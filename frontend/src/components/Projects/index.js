import React, { Component } from "react";
import axios from "axios";

import Project from "../Project";
import { serverAddress } from "../../config.js";

import styles from "./index.module.scss";

const base_url = serverAddress;

class Projects extends Component {
  state = {
    projects: [],
    expanded: false
  };

  async componentDidMount() {
    try {
      axios.get(base_url + "/api/environmentalProjects").then(res => {
        this.setState({
          projects: res.data
        });
      });
    } catch (e) {
      console.log("Error", e);
    }
  }

  toBeExpanded = e => {
    e.preventDefault();
    console.log("Clicked");
    this.setState(
      {
        expanded: true
      },
      () => {
        console.log(this.state.expanded, "expanded");
      }
    );
  };

  render() {
    return (
      <div className={styles.container}>
        <div className={styles.projectsContainer}>
          {this.state.projects.map(project => (
            <div>
              <Project
                key={project.id}
                title={project.title}
                intro={project.intro}
                image={project.image}
                fullDescription={
                  this.state.expanded ? project.fullDescription : null
                }
              />
              <button onClick={this.toBeExpanded}>Läs mer</button>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Projects;
