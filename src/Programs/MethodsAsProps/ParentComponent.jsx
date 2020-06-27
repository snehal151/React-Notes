import React, { Component } from "react";
import ChildComponent from "./ChildComponent";

class ParentComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      parentName: "parent",
    };
    this.greetParent = this.greetParent.bind(this);
  }
  greetParent() {
    alert(`Hello ${this.state.parentName}`);
  }
  render() {
    return (
      <div>
        {/* add attribute to the child component and assign it to greet 
        parent method.make sure dont add aprenthisis
          if we are passing a reference to the greetoarent 
          method as a prop called greetHandler */}
        <ChildComponent greetHandler={this.greetParent}></ChildComponent>
      </div>
    );
  }
}

export default ParentComponent;
