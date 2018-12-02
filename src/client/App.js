import React, { Component } from "react";
import { fetchMentor } from "./api/api";

class App extends Component {
  state = {
    mentors: null,
  };
  componentDidMount() {
    fetchMentor().then(data => this.setState({ mentors: data }));
  }
  render() {
    return <div className="App">{JSON.stringify(this.state.mentors)}</div>;
  }
}

export default App;
