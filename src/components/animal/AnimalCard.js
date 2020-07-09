import React from "react";

const AnimalCard = (props) => {
  return (
    <div className="card">
      <div className="card-content">
        <picture>
          <img src={require(`${props.animals.picture}`)} alt="My Dog" />
        </picture>
        <h3>
          Name: <span className="card-petname">{props.animals.name}</span>
        </h3>
        <p>Breed: {props.animals.breed}</p>
      </div>
    </div>
  );
};

export default AnimalCard;