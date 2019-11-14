import React, { Component } from "react";
import axios from "axios";

import Step from "../Step";
import { serverAddress } from "../../config.js";

import styles from "./index.module.scss";

const base_url = serverAddress;

class Steps extends Component {
  state = {
    steps: []
  };

  async componentDidMount() {
    try {
      axios.get(base_url + "/api/steps").then(res => {
        this.setState({
          steps: res.data
        });
      });
    } catch (e) {
      console.log("Error", e);
    }
  }

  render() {
    return (
      <div className={styles.stepsContainer}>
        <p className={styles.mainTitle}>Hur går det till?</p>
        {this.state.steps.map((step, key) => (
          <Step
            key={key}
            number={step.number}
            icon={step.icon}
            title={step.title}
            description={step.description}
          />
        ))}
      </div>
    );
  }
}

export default Steps;
