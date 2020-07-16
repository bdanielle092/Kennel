import React, { useState, useEffect } from "react"
import AnimalManager from "../../modules/AnimalManager"
import "./AnimalForm.css"
import EmployeeManager from "../../modules/EmployeeManager";
// this is the form that is created when user clicks on the edit button. This is on the animal card
// calling the  animal properties and setting them as empty
const AnimalEditForm = props => {
  // they come into existence but are still empty
  const [animal, setAnimal] = useState({ name: "", breed: "", picture: "" });
  // stops users from clicking before it loads
  const [isLoading, setIsLoading] = useState(false);
  // setting state for employees that will attch to the animals
  //we turn useState into an array so we can map through employee in the data base looking for the match animalId
  const [employees, setEmployees] = useState([])
 
// its set the state each time you change it (edit button) 
// if you change something on edit button it reset the state
  const handleFieldChange = evt => {
    // it takes the value of stateToChange and set the animal as that value
    // if you change the name it sets it to the new name
    const stateToChange = { ...animal };
    stateToChange[evt.target.id] = evt.target.value;
    setAnimal(stateToChange);
  };
  // is updating the animal once we click the submit button
  const updateExistingAnimal = evt => {
    evt.preventDefault()
    setIsLoading(true);

    // This is an edit, so we need the id
    const editedAnimal = {
      id: props.match.params.animalId,
      name: animal.name,
      breed: animal.breed,
      picture: animal.picture,
      // any kind of input coming back as string  paraseInt = parses the string into an integer 
      employeeId: parseInt(animal.employeeId)
    };
    // going to AnimalManager and updating then you go back to animal list
    // you are calling AnimalManager we are going to edit it and then go back to animal list with new edits 
    AnimalManager.update(editedAnimal)
      .then(() => props.history.push("/animals"))
  }
  // going to animalManager using the api call to get single animal , then its going to set the animal
  useEffect(() => {
    AnimalManager.get(props.match.params.animalId)
      .then(animal => {
           // get employees before you set animals
         //going into EmployeeManager getting all of the employees using API calls then setting them 
      EmployeeManager.getAll()
      .then(employees => {
        setEmployees(employees);
      //  you are setting the single animal with the attched employee
        setAnimal(animal);
        // stop user from clicking before it loads
        setIsLoading(false)
      })
    });
      },
      // the propties that match the id of the single animal that was choosen by the user
      [props.match.params.animalId] );

  return (
    <>
      <form>
        <fieldset>
          <div className="formgrid">
            {/* this is the animal name input */}
            <input
              type="text"
              required
              className="form-control"
              // this is the event 
              onChange={handleFieldChange}
              id="name"
              value={animal.name}
            />
            <label htmlFor="name">Animal name</label>
             {/* this is the breed input */}
            <input
              type="text"
              required
              className="form-control"
              // this is the event 
              onChange={handleFieldChange}
              id="breed"
              value={animal.breed}
            />
            <label htmlFor="breed">Breed</label>
            {/* this allows you to pick an employee to attach to an animal */}
            <label htmlFor="employeeId">Employee</label>
             <select
                className="form-control"
               id="employeeId"
              value={animal.employeeId}
              // this is the event
               onChange={handleFieldChange}
                >     
                {/* maping through all the employees you can attch to an animal */}
                {employees.map(employee =>
                <option key={employee.id} value={employee.id}>
                 {employee.name}
                </option>
                )}
                </select>

          </div>
          <div className="alignRight">
            {/* this is the submit button, which is update the existing animal */}
            <button
              type="button" disabled={isLoading}
              onClick={updateExistingAnimal}
              className="btn btn-primary"
            >Submit</button>
          </div>
        </fieldset>
      </form>
    </>
  );
  }

export default AnimalEditForm