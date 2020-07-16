import React, { useState } from 'react';
import AnimalManager from '../../modules/AnimalManager';
import './AnimalForm.css'
// this is form that allows you to add a new animal
// getting all the animal propties from data base, which we set to empty. We added a default picture
const AnimalForm = props => {
  const [animal, setAnimal] = useState({ name: "", breed: "" , picture: "./img/dog4.jpg"});
  const [isLoading, setIsLoading] = useState(false);
 // its set the state each time you change it 
  const handleFieldChange = evt => {
     // it takes the value of stateToChange and set the animal as that value
    // if you add the name and breed it sets the name and breed
    const stateToChange = { ...animal };
    stateToChange[evt.target.id] = evt.target.value;
    setAnimal(stateToChange);
  };

  /*  Local method for validation, set loadingStatus, create animal      
  object, invoke the AnimalManager post method, and redirect to the full animal list
  */
//  if they leave one of the fields empty it comes up with the window alert say please fill out form 
// if they aren't empty they go to the post api in AnimalManager and then refreashes the page with all the animals
  const constructNewAnimal = evt => {
    evt.preventDefault();
    if (animal.name === "" || animal.breed === "") {
      window.alert("Please input an animal name and breed");
    } else {
      setIsLoading(true);
      // Create the animal and redirect user to animal list
      AnimalManager.post(animal)
        .then(() => props.history.push("/animals"));
    }
  };

  return (
    <>
      <form>
        <fieldset>
          <div className="formgrid">
            {/* this is the name input */}
            <input
              type="text"
              required
              onChange={handleFieldChange}
              id="name"
              placeholder="Animal name"
            />
            <label htmlFor="name">Name</label>
            {/* this is the breed input */}
            <input
              type="text"
              required
              onChange={handleFieldChange}
              id="breed"
              placeholder="Breed"
            />
            <label htmlFor="breed">Breed</label>
          </div>
          <div className="alignRight">
            {/* this is the submit button which save the new aniaml */}
            <button
              type="button"
              disabled={isLoading}
              onClick={constructNewAnimal}
            >Submit</button>
          </div>
        </fieldset>
      </form>
    </>
  );
};

export default AnimalForm