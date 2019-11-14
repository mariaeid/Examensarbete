import React, { Component } from "react";
import { Redirect } from "react-router";
import axios from "axios";

import Hero from "../../components/Hero";
import Steps from "../../components/Steps";
import Projects from "../../components/Projects";
import TextBox from "../../components/TextBox";
import ContactForm from "../../components/ContactForm";
import Footer from "../../components/Footer";
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
    axios.get(base_url + "/api/mainContent").then(res => {
      this.setState({
        mainContents: res.data
      });
    });
  }

  render() {
    if (localStorage.getItem("access_token")) {
      return <Redirect to="/user" />;
    }

    return (
      <div>
        <Hero />
        <div id="main"></div>
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
        {this.state.mainContents.map((mainContent, key) => (
          <TextBox
            key={key}
            title={mainContent.titlePart3}
            description={mainContent.textPart3}
          />
        ))}
        <ContactForm />
        <Footer title="Följ oss på sociala medier" upText="Till toppen" />
      </div>
    );
  }
}

export default Home;
