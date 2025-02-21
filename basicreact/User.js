import React, { Component } from "react";

export default class User extends Component {
  render() {
    let name = "prajwal";
    function greet() {
      alert(name);
      alert("Welcome to ReactJS u should work hard on react");
    }
    return (
      <div className="App">
        <h1>Hello Clicker</h1>
        <button onClick={greet}>Click me</button>
      </div>
    );
  }
}
