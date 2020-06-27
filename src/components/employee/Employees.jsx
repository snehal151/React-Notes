import React, { Component } from "react";
import EmployeeCard from "./EmployeeCard";

class Employees extends Component {
  state = {
    employeesJsonData: [],
  };

  constructor(props) {
    super(props);
    this.state.employeesJsonData = props.data;
  }

  render() {
    let employees = this.state.employeesJsonData;

    if (employees.length == 0) return <p>No data</p>;

    return (
      <div className="d-flex flex-wrap">
        {employees.map((index) => (
          <EmployeeCard data={index} />
        ))}
      </div>
    );
  }
}

export default Employees;
