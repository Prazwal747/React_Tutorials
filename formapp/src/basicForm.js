import React, { Component } from "react";

class Basicform extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      comments: "",
    };
  }

  handleChange = (event) => {
    this.setState(
      {
        username: event.target.value,
      },
      console.log(event.target.value)
    );
  };

  handleCommentsChange = (event) => {
    this.setState({
      comments: event.target.value,
    });
  };

  handleSubmit = (event) => {
    alert(`${this.state.username} ${this.state.comments} `);
    event.preventDefault(); //page doesnt refresh and values remain
  };
  render() {
    const { username, comments } = this.state; //destructuring as code cleaning u can directly use variables
    return (
      <div>
        <h1>{this.state.username}</h1>
        <h2>{this.state.comments}</h2>
        <h1>Basic Form Handling</h1>
        <form onSubmit={this.handleSubmit}>
          <label>username</label>
          <input
            type="text"
            value={this.state.username}
            onChange={this.handleChange}
          ></input>
          <label>Comments</label>
          <textarea
            value={this.state.comments}
            onChange={this.handleCommentsChange}
          ></textarea>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default Basicform;
