import React from "react";

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      password: "",
    };
  }
  handleChange = () => {
    this.setState({
      email: event.target.value,
      password: event.target.value,
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    console.log("form submit");
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input type="text" placeholder="Enter Name" onChange={this.handleChange} />
          </label>
          <label>
            Email:
            <input type="email" placeholder="Enter Email" onChange={this.handleChange} />
          </label>
          <label>
            Password:
            <input type="password" placeholder="Enter password" onChange={this.handleChange} />
          </label>

          <button type="submit">SignUp</button>
        </form>
      </div>
    );
  }
}

export default SignUp;
