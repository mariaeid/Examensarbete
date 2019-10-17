import React, { Component } from "react";

import Step from "../Step";

import styles from "./index.module.scss";

class Steps extends Component {
  state = {
    steps: []
  };

  async componentDidMount() {
    try {
      const res = await fetch("http://127.0.0.1:8000/api/steps"); // fetching the data from api, before the page loaded
      const steps = await res.json();
      this.setState({
        steps
      });
    } catch (e) {
      console.log(e);
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
