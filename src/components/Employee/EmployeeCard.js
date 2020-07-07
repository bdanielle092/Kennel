import React from "react";

const EmployeeCard = () => {
  return (
    <div className="card">
      <div className="card-content">
        <picture>
          <img src={require("./employee.jpg")} alt="My Dog" />
        </picture>
        <h3>
          Name: <span className="card-employeename">Brad</span>
        </h3>
        <p>Employee of the Month</p>
      </div>
    </div>
  );
};

export default EmployeeCard;