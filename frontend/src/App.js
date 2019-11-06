import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from "./pages/Home";
import User from "./pages/User";
import RegisterBuy from "./pages/RegisterBuy";
import EditBuy from "./pages/EditBuy";

function App() {
  return (
    <Router>
      <div className="App">
        <div className="content">
          <Route path="/" exact strict component={Home} />
          <Route path="/user" exact strict component={User} />
          <Route path="/buy" exact strict component={RegisterBuy} />
          <Route
            path="/editBuy/:currentBuyerId"
            exact
            strict
            component={EditBuy}
          />
        </div>
      </div>
    </Router>
  );
}

export default App;
