import React, { Component } from "react";
import Departments from "./Departments";

class DepartmentPage extends Component {
  render() {
    let departments = [
      {
        id: 1,
        name: "Testing",
        url: "http://localhost:3000/",
        src:
          "https://www.aress.com/assets/images/independent-software-testing-services/independent-head-bg.png",
        message: "hi",
      },
      {
        id: 2,
        name: "Design",
        url: "http://localhost:3000/",
        src:
          "http://www.businesspundit.com/wp-content/uploads/2016/10/peopleperson-the-changing-face-of-hr-750x400-600x320.jpg?width=640",
      },
      {
        id: 3,
        name: "Development",
        url: "http://localhost:3000/",
        src:
          "https://appdevelopermagazine.com/scripts/resize/?path=/images/news_images/Thoughts-on-Andreessens-Essay-App-Developer-Magazine_gd5kd6gn.jpg&width=700",
      },
      { id: 4, name: "HR", url: "http://localhost:3000/" },
      { id: 5, name: "Architecture", url: "http://localhost:3000/" },
    ];

    return (
      <div>
        <Departments data={departments} />
      </div>
    );
  }
}

export default DepartmentPage;
