import React, { Component } from "react";
import axios from "axios";

class App extends Component {
  state = {
    projects: []
  };

  // This is where the magic happens
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
    console.log(this.state.projects);
    return (
      <div>
        {this.state.projects.map(project => (
          <div key={project.id}>
            <h1>{project.title}</h1>
            <p>{project.intro}</p>
            <p>{project.fullDescription}</p>
            <img src={project.image} alt={project.title} />
          </div>
        ))}
      </div>
    );
  }
}

export default App;
