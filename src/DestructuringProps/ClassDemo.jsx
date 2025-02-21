import React, { Component } from "react";

class ClassDemo extends Component {
  render() {
    const { name, HeroName } = this.props;
    return (
      <div>
        <h1>
          Welcome to Class Computing we just did Destructurd props in Cmopmn
        </h1>
        <h2>
          hello
          {name},{HeroName}
        </h2>
      </div>
    );
  }
}

export default ClassDemo;
