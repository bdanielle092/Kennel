import React, { useState, useEffect } from 'react'
import LocationManager from '../../modules/LocationManager'
import EmployeeCard from '../Employee/EmployeeCard'
import EmployeeManager from "../../modules/EmployeeManager"

const LocationWithEmployees = props => {
  const [location, setLocation] = useState({});
  const [employees, setEmployees] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const handleDelete = (id) => {
     //invoke the delete function in AnimalManger and re-direct to the employee list.
      setIsLoading(true);
      EmployeeManager.delete(id).then(() =>
       props.history.push("/locations")
      );
  };
  useEffect(() => {
    //go here now make call to get location with employee
    LocationManager.getWithEmployees(props.match.params.locationId)
      .then(APIResult => {
        setLocation(APIResult);
        setEmployees(APIResult.employees);
      });
      setIsLoading(false);
  }, [props.match.params.locationId]);
    
  return (
    <div className="card">
      <p>Location: {location.name}</p>
      <p>Adress: {location.address}</p>
      {employees.map(employee =>
        <EmployeeCard
          key={employee.id}
          employees={employee}
          deleteEmployee={handleDelete}
          disabled={isLoading}
          {...props}
        />
      )}
    </div>
  );
};

export default LocationWithEmployees;