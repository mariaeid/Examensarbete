import React, { Component } from "react";
import { Route, Redirect } from "react-router";

import Hero from "../../components/Hero";
import Steps from "../../components/Steps";
import Projects from "../../components/Projects";
import TextBox from "../../components/TextBox";
import { serverAddress } from "../../config.js";

const base_url = serverAddress;

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mainContents: []
    };
  }

  async componentDidMount() {
    try {
      const res = await fetch(base_url + "/mainContent");
      const mainContents = await res.json();
      this.setState({
        mainContents
      });
    } catch (e) {
      console.log(e);
    }
  }

  render() {
    return (
      <div>
        <Route
          exact
          path="/"
          render={() =>
            this.state.logged_in ? <Redirect to="/user" /> : <Redirect to="/" />
          }
        />
        <Hero />
        {this.state.mainContents.map((mainContent, key) => (
          <TextBox
            key={key}
            title={mainContent.titlePart1}
            description={mainContent.textPart1}
          />
        ))}
        <Steps />
        {this.state.mainContents.map((mainContent, key) => (
          <TextBox
            key={key}
            title={mainContent.titlePart2}
            description={mainContent.textPart2}
          />
        ))}
        <Projects />
      </div>
    );
  }
}

export default Home;
