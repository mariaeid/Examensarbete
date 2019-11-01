import React, { Component } from "react";
import { Route, Redirect } from "react-router";

import Hero from "../../components/Hero";
import Steps from "../../components/Steps";
import Projects from "../../components/Projects";
import TextBox from "../../components/TextBox";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mainContents: []
    };
  }

  async componentDidMount() {
    try {
      const res = await fetch("http://127.0.0.1:8000/api/mainContent");
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
        <Route
          exact
          path="/"
          render={() =>
            this.state.logged_in ? <Redirect to="/user" /> : <Redirect to="/" />
          }
        />
      </div>
    );
  }
}

export default Home;
