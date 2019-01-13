import React from "react";
import axios from "axios";

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      password: "",
      message: "",
    };
  }
  handleChange = () => {
    this.setState({
      name: event.target.value,
      email: event.target.value,
      password: event.target.value,
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    const { name, email, password } = this.state;
    if (name === "" && email === "" && password === "") {
      return;
    } else {
      axios.post("/users", { name, email, password }).then(result => {
        console.log(result, "user created");
        this.setState({ isSubmitted: true });
      });
    }
  };

  render() {
    return (
      <div className="formWrapper">
        <form onSubmit={this.handleSubmit}>
          <label>
            Name
            <input type="text" placeholder="Enter Name" onChange={this.handleChange} />
          </label>
          <label>
            Email
            <input type="email" placeholder="Enter Email" onChange={this.handleChange} />
          </label>
          <label>
            Password
            <input type="password" placeholder="Enter password" onChange={this.handleChange} />
          </label>
          <button type="submit">SignUp</button>
        </form>
      </div>
    );
  }
}

export default SignUp;
