import React, { Component } from "react";

class StateChange extends Component {
  constructor() {
    super();
    this.state = {
      message: "Welcome",
    };
  }
  changeMessage() {
    this.setState({
      message: "Thank you for Visiting",
    });
  }
  changeMessage1() {
    this.setState({
      message: "Thank you ",
    });
  }
  render() {
    return (
      <div className="card m-2 p-4 col-2 shadow-sm">
        <h1>{this.state.message}</h1>
        <img
          src="https://cdn1.vectorstock.com/i/1000x1000/02/85/indian-people-talk-different-indian-religious-vector-4650285.jpg"
          alt=""
        />

        <header className="card-title font-weight-bolder">HHHH </header>
        <section>gggg</section>
        <a
          href="https://www.janmat.info/"
          class="btn btn-secondary"
          onClick={() => this.changeMessage()}
        >
          Click here
        </a>
        <button onClick={() => this.changeMessage1()}>Subscribe</button>
      </div>
    );
  }
}

export default StateChange;
