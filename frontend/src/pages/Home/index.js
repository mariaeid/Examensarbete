import React, { Component } from "react";

import Hero from "../../components/Hero";
import Steps from "../../components/Steps";
import Projects from "../../components/Projects";
import TextBox from "../../components/TextBox";

class Home extends Component {
  state = {
    mainContents: []
  };

  async componentDidMount() {
    try {
      const res = await fetch("http://127.0.0.1:8000/api/mainContent"); // fetching the data from api, before the page loaded
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
      </div>
    );
  }
}

export default Home;
