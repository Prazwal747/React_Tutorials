import React, { Component } from "react";

class Person extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <h1>{this.props.listItem}</h1>
      </div>
    );
  }
}

export default Person;
