import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from "./pages/Home";
import User from "./pages/User";
import RegisterBuy from "./pages/RegisterBuy";

function App() {
  return (
    <Router>
      <div className="App">
        <div className="content">
          <Route path={`${process.env.PUBLIC_URL}/`} exact component={Home} />
          <Route
            path={`${process.env.PUBLIC_URL}/user`}
            exact
            component={User}
          />
          <Route
            path={`${process.env.PUBLIC_URL}/buy`}
            exact
            component={RegisterBuy}
          />
        </div>
      </div>
    </Router>
  );
}

export default App;
