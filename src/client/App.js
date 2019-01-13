import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import SignUp from "./SignUp";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <SignUp />
          <Route path="/" Component={SignUp} />
        </div>
      </Router>
    );
  }
}

export default App;
