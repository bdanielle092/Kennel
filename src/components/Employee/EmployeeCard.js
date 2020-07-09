import React from "react";

const EmployeeCard = (props) => {
  return (
    <div className="card">
      <div className="card-content">
        <picture>
          <img src={require(`${props.employees.picture}`)} alt="employee" />
        </picture>
        <h3>
  Name: <span className="card-employeename">{props.employees.name}</span>
        </h3>
  <p>Quote: {props.employees.quote}</p>
      </div>
    </div>
  );
};

export default EmployeeCard;