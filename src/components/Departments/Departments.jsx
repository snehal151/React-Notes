import React, { Component } from "react";
import DepartmentCard from "./DepartmentCard";

class Departments extends Component {
  state = {
    departmentsJsonData: [],
  };

  constructor(props) {
    super(props);
    this.state.departmentsJsonData = props.data;
    console.log(props);
  }
  render() {
    let departmentsd = this.state.departmentsJsonData;

    if (departmentsd.length === 0) return <p>no data in array</p>;

    return (
      <div className="d-flex flex-wrap">
        {departmentsd.map((dept) => (
          <DepartmentCard data={dept}></DepartmentCard>
        ))}
      </div>
    );
  }
}

export default Departments;
