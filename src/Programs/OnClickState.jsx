import React, { Component } from "react";

class OnClickState extends Component {
  constructor() {
    super();
    this.state = {
      message: "Welcome to Janmat",
    };
  }
  changeMessage() {
    this.setState({
      message:
        "Thank you for Visiting.Your Contribution is helpful,Keep Posting.",
    });
  }
  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        <button onClick={() => this.changeMessage()}>Subscribe</button>
      </div>
    );
  }
}

export default OnClickState;
