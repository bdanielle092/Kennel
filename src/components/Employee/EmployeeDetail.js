import React, { useState, useEffect } from 'react';
import EmployeeManager from '../../modules/EmployeeManager';
import './EmployeeDetail.css'

const EmployeeDetail = props => {
  const [employees, setEmployee] = useState({ name: "", quote: "" , picture: ""});
  const [isLoading, setIsLoading] = useState(true)
  useEffect(() => {
    //get(id) from EmployeeManager and hang on to the data; put it into state
    EmployeeManager.get(props.employeeId)
      .then(employees => {
        setEmployee({
          name: employees.name,
          quote: employees.quote,
          picture: employees.picture
        });
        setIsLoading(false);
      });
  }, [props.employeeId]);
  const handleDelete = () => {

    setIsLoading(true);
    EmployeeManager.delete(props.employeeId).then(() =>
     props.history.push("/employee")
    );
  };

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
        <button type="button" disabled={isLoading} onClick={handleDelete}>Remove</button>
      </div>
    </div>
  );
}

export default EmployeeDetail;