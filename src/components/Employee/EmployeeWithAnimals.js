import React, { useState, useEffect } from 'react'
import EmployeeManager from '../../modules/EmployeeManager'
import AnimalCard from '../animal/AnimalCard'
import AnimalManager from "../../modules/AnimalManager"
const EmployeeWithAnimals = props => {
  const [employee, setEmployee] = useState({});
  const [animals, setAnimals] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const handleDelete = (id) => {
    //invoke the delete function in AnimalManger and re-direct to the employee list.
    setIsLoading(true);
    AnimalManager.delete(id).then(() =>
      props.history.push("/employees")
    );
  };
  useEffect(() => {
    //got here now make call to get employee with animal
    EmployeeManager.getWithAnimals(props.match.params.employeeId)
      .then(APIResult => {
        setEmployee(APIResult);
        setAnimals(APIResult.animals);
      });
      setIsLoading(false);
  }, [props.match.params.employeeId]);
    console.log(animals)
  return (
    <div className="card">
      <p>Employee: {employee.name}</p>
      <p>Quote: {employee.quote}</p>
      {animals.map(animal =>
        <AnimalCard
          key={animal.id}
          animals={animal}
          deleteAnimal={handleDelete}
          disabled={isLoading}
          {...props} 
         /> 
      )} 
    </div>
  );
};

export default EmployeeWithAnimals;