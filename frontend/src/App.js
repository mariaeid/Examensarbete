import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from "./pages/Home";
import Auth from "./components/Auth";

function App() {
  return (
    <Router>
      <div className="App">
        <div className="content">
          <Auth />
          <Route path={`${process.env.PUBLIC_URL}/`} exact component={Home} />
        </div>
      </div>
    </Router>
  );
}

export default App;
