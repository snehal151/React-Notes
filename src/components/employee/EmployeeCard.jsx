import React, { Component } from "react";

class EmployeeCard extends Component {
  state = {
    employeeJsonData: {},
  };

  constructor(props) {
    super(props);
    this.state.employeeJsonData = props.data;
  }

  render() {
    let employee = this.state.employeeJsonData;
    return (
      <div className="card m-2 p-4 col-2 shadow-sm">
        <header className="card-title font-weight-bold">
          {employee.id} - {employee.name}
        </header>
        <section>{employee.info}</section>
        <footer className="font-weight-light">
          Active since {employee.active}
        </footer>
      </div>
    );
  }
}

export default EmployeeCard;
