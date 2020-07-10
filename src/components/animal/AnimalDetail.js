import React, { useState, useEffect } from 'react';
import AnimalManager from '../../modules/AnimalManager';
import './AnimalDetail.css'
import {firstLetterCase} from '../../modules/helpers'

const AnimalDetail = props => {
  const [animals, setAnimal] = useState({ name: "", breed: "", picture: ""});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    //get(id) from AnimalManager and hang on to the data; put it into state
    AnimalManager.get(props.animalId)
      .then(animals => {
        setAnimal({
          name: animals.name,
          breed: animals.breed,
          picture: animals.picture
        });
        setIsLoading(false);
      });
  }, [props.animalId]);

  const handleDelete = () => {
    //invoke the delete function in AnimalManger and re-direct to the animal list.
    setIsLoading(true);
    AnimalManager.delete(props.animalId).then(() =>
      props.history.push("/animals")
    );
  };

  return (
    <div className="card">
      <div className="card-content">
          { (animals.picture !== "") &&
        <picture>
          <img src={require(`${animals.picture}`)} alt="My Dog" />
        </picture> 
        }

        <h3>Name: <span style={{ color: 'darkslategrey' }}>{firstLetterCase(animals.name)}</span></h3>
        <p>Breed: {animals.breed}</p>
        <button type="button" disabled={isLoading} onClick={handleDelete}>
          Discharge
        </button>
      </div>
    </div>
  );
}

export default AnimalDetail;