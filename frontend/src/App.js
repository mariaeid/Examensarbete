import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from "./pages/Home";
import Products from "./pages/Products";
import User from "./pages/User";
import Buy from "./pages/Buy";

function App() {
  return (
    <Router>
      <div className="App">
        <div className="content">
          <Route path="/" exact strict component={Home} />
          <Route path="/products" exact strict component={Products} />
          <Route path="/user" exact strict component={User} />
          <Route path="/buy" exact strict component={Buy} />
        </div>
      </div>
    </Router>
  );
}

export default App;
