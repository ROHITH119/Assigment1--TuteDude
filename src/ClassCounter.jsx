import React, { Component } from "react";

class ClassCounter extends Component {
  constructor() {
    super();
    this.state = {
      data: 0,
    };
  }

  increment = () => {
    this.setState({ data: this.state.data + 1 });
  };

  decrement = () => {
    if (this.state.data > 0) {
      this.setState({ data: this.state.data - 1 });
    }
  };

  render() {
    return (
      <div className="bg-blue-500 grid grid-rows-2 gap-5 rounded-xl p-5 shadow shadow-2xl shadow-black">
        <p className="text-center">{this.state.data}</p>
        <div className="flex flex-row gap-4">
          <button onClick={this.increment}>increment</button>
          <button onClick={this.decrement}>decrement</button>
        </div>
      </div>
    );
  }
}

export default ClassCounter;
