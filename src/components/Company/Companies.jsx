import React, { Component } from "react";
import CompanyCard from "./CompanyCard";

class Companies extends Component {
  state = {
    companiesData: [],
  };

  constructor(props) {
    super(props);
    this.state.companiesData = props.data;
  }
  render() {
    let companies = this.state.companiesData;

    if (companies.length === 0) return <p>No Data Found</p>;

    return (
      <div className="d-flex flex-wrap">
        {companies.map((company) => (
          <CompanyCard data={company} />
        ))}
      </div>
    );
  }
}

export default Companies;
