import React from "react";
import "./Animal.css"

const AnimalCard = (props) => {
  return (
    <div className="card">
      <div className="card-content">
        <picture>
          <img className="animalImg" src={require(`${props.animals.picture}`)} alt="My Dog" />
        </picture>
        <h3>
          Name: <span className="card-petname">{props.animals.name}</span>
        </h3>
        <p>Breed: {props.animals.breed}</p>
        <button type="button" onClick={() => props.deleteAnimal(props.animals.id)}>Discharge</button>
      </div>
    </div>
  );
};

export default AnimalCard;