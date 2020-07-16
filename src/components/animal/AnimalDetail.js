import React, { useState, useEffect } from 'react';
import AnimalManager from '../../modules/AnimalManager';
import './AnimalDetail.css'
import {firstLetterCase} from '../../modules/helpers'
// this is card that is created when they click on the detail button. Its on the animal card
const AnimalDetail = props => {
  // animal is a state variable and we set it to name, breed, picture and they are empty 
  // setAnimal updates the current animal
  // usestate is setting state as empty
  const [animals, setAnimal] = useState({ name: "", breed: "", picture: ""});
  // this is setting a state so user can't click while its still loading
  const [isLoading, setIsLoading] = useState(true);

  // useEffect is getting the id from AnimalManager and putting it into state
  useEffect(() => {
    //get(id) from AnimalManager and hang on to the data; put it into state
    AnimalManager.get(props.animalId)
    // then we are going to set the animal using the name breed and picture. We are pulling the info from the api
      .then(animals => {
        setAnimal({
          name: animals.name,
          breed: animals.breed,
          picture: animals.picture
        });
        // stops users from clicking while its loading 
        setIsLoading(false);
      });
      // if the id is ever change its going to go back and get the updated animal
  }, [props.animalId]);

  //invoke the delete function in AnimalManger and re-direct to the updated animal list.
  const handleDelete = () => {
    // stops user from clicking before it loads
    setIsLoading(true);
    AnimalManager.delete(props.animalId).then(() =>
      props.history.push("/animals")
    );
  };
  // After delete this takes your back to the update animal list
  return (
    <div className="card">
      <div className="card-content">
        {/* this is saying if there is not picture don't move foward, if there is a picture move to next line */}
          { (animals.picture !== "") &&
        <picture>
          <img src={require(`${animals.picture}`)} alt="My Dog" />
        </picture> 
        }

        <h3>Name: <span style={{ color: 'darkslategrey' }}>{firstLetterCase(animals.name)}</span></h3>
        <p>Breed: {animals.breed}</p>
        {/* this is the delete button */}
        <button type="button" disabled={isLoading} onClick={handleDelete}>
          Discharge
        </button>
      </div>
    </div>
  );
}

export default AnimalDetail;