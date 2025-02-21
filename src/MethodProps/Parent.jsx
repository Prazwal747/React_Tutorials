import React, { Component } from "react";
import Child from "./child";

class Parent extends Component {
  constructor() {
    super();
    this.state = {
      message: "parent component",
    };
  }

  greetings = (childName) => {
    console.log(childName);
    alert("Hello this is " + this.state.message + childName);
  };

  render() {
    return (
      <div>
        <h1>Welcome to React</h1>
        <Child greetHandler={this.greetings} />
      </div>
    );
  }
}

export default Parent;
