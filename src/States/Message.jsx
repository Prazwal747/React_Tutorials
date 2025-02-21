import React, { Component } from "react";

class Message extends Component {
  constructor() {
    super();
    this.state = {
      userName: "Prazwal",
    };
  }

  handleChange = () => {
    this.setState({
      userName: "Silver Fox",
    });
  };

  render() {
    return (
      <div>
        <h1>Welcome {this.state.userName}</h1>
        <button onClick={() => this.handleChange()}>Daba de</button>
        <h1>{this.state.userName}</h1>
      </div>
    );
  }
}

export default Message;
