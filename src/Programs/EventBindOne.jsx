import React, { Component } from "react";

class EventBindOne extends Component {
  constructor(props) {
    super(props);
    this.state = {
      massage: "hi...!!!",
      name: "Neev",
    };
  }

  clickHandler = () => {
    this.setState({ massage: "goodBye", name: "sddsd" });
  };
  render() {
    return (
      <div>
        <div>{this.state.massage}</div>
        <div>{this.state.name}</div>
        <button onClick={this.clickHandler}>Click</button>
      </div>
    );
  }
}
export default EventBindOne;
