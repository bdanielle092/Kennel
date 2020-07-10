import React, { useState, useEffect } from 'react';
import AnimalManager from '../../modules/AnimalManager';
import './AnimalDetail.css'

const AnimalDetail = props => {
  const [animal, setAnimal] = useState({ name: "", breed: "" });

  useEffect(() => {
    //get(id) from AnimalManager and hang on to the data; put it into state
    AnimalManager.get(props.animalId)
      .then(animal => {
        setAnimal({
          name: props.animals.name,
          breed: props.animals.breed
        });
      });
  }, [props.animalId]);

  return (
    <div className="card">
      <div className="card-content">
        <picture>
          <img src={require(`${props.animals.picture}`)} alt="My Dog" />
        </picture>
        <h3>Name: <span style={{ color: 'darkslategrey' }}>{props.animals.name}</span></h3>
        <p>Breed: {props.animals.breed}</p>
      </div>
    </div>
  );
}

export default AnimalDetail;