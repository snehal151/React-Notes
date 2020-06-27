import React, { Component } from "react";

class CompanyCard extends Component {
  state = {
    companyData: {},
  };
  constructor(props) {
    super(props);
    this.state.companyData = props.data;
  }
  render() {
    let company = this.state.companyData;
    return (
      <div>
        <div>{company.name}</div>
        <div>{company.city}</div>
      </div>
    );
  }
}

export default CompanyCard;
