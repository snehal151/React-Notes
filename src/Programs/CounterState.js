import React, { Component } from "react";

class CounterState extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  increment() {
    //this.setState(
    //{
    //count: this.state.count + 1,
    //},
    //() => {
    //console.log("callback value", this.state.count);
    //}
    //);
    this.setState((prevState, props) => ({
      count: prevState.count + 1,
    }));
    console.log(this.state.count);
  }
  increment1(i) {
    this.setState((pS, prp) => ({ someNewKey: i }));
    console.log(this.state.someNewKey);
  }
  incrementFive() {
    this.increment();
    this.increment();
    this.increment1(56);
    this.increment();
    this.increment();
    this.increment1(86);
  }
  render() {
    console.log(this.state);

    return (
      <div>
        <div>count-{this.state.count}</div>
        <button onClick={() => this.incrementFive()}>Increment</button>
      </div>
    );
  }
}
export default CounterState;
