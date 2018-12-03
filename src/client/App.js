import React, { Component } from "react";
import { fetchMentor } from "./api/api";

class App extends Component {
  state = {
    mentors: null,
  };
  componentDidMount() {
    fetchMentor().then(response => this.setState({ mentors: response.data }));
  }
  render() {
    const { mentors } = this.state;

    return (
      <div className="App">
        <ul>
          {mentors &&
            mentors.map(mentor => (
              <li key={mentor.id}>
                {mentor.first_name} {mentor.last_name}
              </li>
            ))}
        </ul>
      </div>
    );
  }
}

export default App;
