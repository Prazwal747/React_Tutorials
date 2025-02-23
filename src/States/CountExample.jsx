import React, { Component } from "react";

class CountExample extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }

  increment = () => {
    // this.setState(
    //   {
    //     count: this.state.count + 1,
    //   },
    //   () => {
    //     console.log(this.state.count);
    //   }
    // );
    this.setState(
      (prevState) => ({
        count: prevState.count + 1,
      }),
      () => console.log(this.state.count)
    );
  };

  incrementFive() {
    this.increment();
    this.increment();
    this.increment();
    this.increment();
  }

  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        {/* <button onClick={() => this.increment()}>{this.state.count}</button> */}
        <button onClick={() => this.incrementFive()}>{this.state.count}</button>
      </div>
    );
  }
}

export default CountExample;
