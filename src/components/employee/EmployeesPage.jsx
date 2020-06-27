import React from "react";
import Employees from "./Employees";

function EmployeesPage() {
  let employees = [
    { id: 1, name: "Jackson", info: "He is honest", active: 5 },
    { id: 2, name: "Johnson", info: "He is honest", active: 5 },
    { id: 3, name: "Pattinson", info: "He is honest", active: 5 },
    { id: 4, name: "Kingston", info: "He is honest", active: 5 },
    { id: 5, name: "Waterloo", info: "He is honest", active: 5 },
    { id: 6, name: "Basignstoke", info: "He is honest", active: 5 },
    { id: 7, name: "Farnborough", info: "He is honest", active: 5 },
    { id: 8, name: "Woking", info: "He is honest", active: 5 },
    { id: 9, name: "Claphon", info: "He is honest", active: 2 },
    { id: 10, name: "Croydon", info: "He is honest", active: 5 },
    { id: 11, name: "Reading", info: "He is honest", active: 5 },
    { id: 12, name: "Aldershot", info: "He is honest", active: 7 },
    { id: 13, name: "SouthHampton", info: "He is honest", active: 5 },
    { id: 14, name: "NorthHampton", info: "He is honest", active: 5 },
    { id: 15, name: "Waybridge", info: "He is honest", active: 4 },
    { id: 16, name: "Wembley", info: "He is honest", active: 5 },
    { id: 17, name: "Southhall", info: "He is honest", active: 51 },
  ];
  return (
    <div className="EmployeesPage">
      <Employees data={employees} />
    </div>
  );
}

export default EmployeesPage;
