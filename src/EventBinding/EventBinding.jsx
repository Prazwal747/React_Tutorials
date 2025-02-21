import React, { Component } from "react";

export class EventBinding extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "Hello",
    };
  }

  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        <button>Click</button>
      </div>
    );
  }
}

export default EventBinding;
