import React, { Component } from "react";
import Companies from "./Companies";

class CompanyPage extends Component {
  render() {
    let companies = [{ name: "Capgemini", city: "Pune" }];
    // let companies = [];
    return (
      <div>
        <Companies data={companies}></Companies>
      </div>
    );
  }
}

export default CompanyPage;
