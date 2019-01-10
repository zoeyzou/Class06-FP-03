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
                {mentor.first_name} {mentor.last_name}{" "}
                <a href={mentor.Slack_nickname}>{mentor.Slack_nickname}</a>
              </li>
            ))}
        </ul>
        <iframe
          src={
            "https://calendar.google.com/calendar/embed?src=classroom111372623996470615725%40group.calendar.google.com&ctz=Europe%2FCopenhagen"
          }
          style={{
            borderWidth: 0,
            width: "800px",
            height: "600px",
          }}
          frameBorder="0"
          scrolling="no"
        />
      </div>
    );
  }
}

export default App;
