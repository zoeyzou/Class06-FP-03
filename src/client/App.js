import React, { Component } from "react";
import { fetchMentor } from "./api/api";

class App extends Component {
  constructor(props) {
    super();
    this.state = {
      mentors: null,
      value: "",
    };
  }

  componentDidMount() {
    fetchMentor().then(response => this.setState({ mentors: response.data }));
  }
  render() {
    const { mentors } = this.state;

    return (
      <div className="App">
        <div className="container">
          <ul>
            {mentors &&
              mentors.map(mentor => (
                <li key={mentor.id}>
                  {mentor.first_name} {mentor.last_name}{" "}
                  <a href={mentor.Slack_nickname}>{mentor.Slack_nickname}</a>
                </li>
              ))}
          </ul>
          <input type="text" value="" />
          <button>add</button>
          <button>Edit</button>
          <button>Delete</button>
        </div>
      </div>
    );
  }
}

export default App;
