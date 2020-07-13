import React from "react";
import "./Employee.css"
import { Link } from "react-router-dom";

const EmployeeCard = (props) => {
  return (
    <div className="card">
      <div className="card-content">
        <picture>
          <img className="employeeImg" src={require(`${props.employees.picture}`)} alt="employee" />
        </picture>
        <h3>
  Name: <span className="card-employeename">{props.employees.name}</span>
        </h3>
  <p>Quote: {props.employees.quote}</p>
   <Link to={`/employees/${props.employees.id}`}>
    <button>Details</button>
   </Link>
   <button type="button"
  onClick={() => props.history.push(`/employees/${props.employees.id}/edit`)}>
  Edit
</button>

<button type="button" onClick={() => props.deleteEmployee(props.employees.id)}>Fire</button>
      </div>
    </div>
  );
};

export default EmployeeCard;