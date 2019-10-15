import React, { Component } from "react";

import Projects from "./components/Projects";
import TextBox from "./components/TextBox";

class App extends Component {
  render() {
    return (
      <div>
        <TextBox
          title="Vilka projekt vill ni stötta?"
          description="Välj ett eller flera av projekten nedan att investera i - valet är fritt."
        />
        <Projects />
      </div>
    );
  }
}

export default App;
