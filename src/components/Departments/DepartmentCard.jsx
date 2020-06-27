import React, { Component } from "react";
import "./Card.css";
class DepartmentCard extends Component {
  state = {
    departmentJsonData: {},
  };

  constructor(props) {
    super(props);
    this.state.departmentJsonData = props.data;
  }

  changeMessage() {
    this.setState({
      message: "thank you",
    });
  }
  render() {
    let department = this.state.departmentJsonData;
    return (
      <div className="card m-2 p-4 col-2 shadow-sm">
        <img src={department.src} alt="" />

        <header className="card-title font-weight-bolder">
          {department.id}
        </header>
        <section>{department.name}</section>
        <a href={department.url} class="btn btn-secondary">
          Click here
        </a>
        <button onClick={() => this.changeMessage()}>Subscribe</button>
      </div>
    );
  }
}

export default DepartmentCard;
