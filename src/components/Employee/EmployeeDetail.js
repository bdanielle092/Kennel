import React, { useState, useEffect } from 'react';
import EmployeeManager from '../../modules/EmployeeManager';
import './EmployeeDetail.css'

const EmployeeDetail = props => {
  const [employees, setEmployee] = useState({ name: "", quote: "" , picture: ""});

  useEffect(() => {
    //get(id) from EmployeeManager and hang on to the data; put it into state
    EmployeeManager.get(props.employeeId)
      .then(employees => {
        setEmployee({
          name: employees.name,
          quote: employees.quote,
          picture: employees.picture
        });
      });
  }, [props.employeeId]);

  return (
    <div className="card">
      <div className="card-content">
        { (employees.picture !== "") && 
        <picture>
          <img src={require(`${employees.picture}`)} alt="employee" />
        </picture>
          }
        <h3>Name: <span style={{ color: 'darkslategrey' }}>{employees.name}</span></h3>
        <p>Quote: {employees.quote}</p>
      </div>
    </div>
  );
}

export default EmployeeDetail;