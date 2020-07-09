import React from "react";

const AnimalCard = (props) => {
  return (
    <div className="card">
      <div className="card-content">
        <picture>
          <img src={require(`${props.owners.picture}`)} alt="owner" />
        </picture>
        <h3>
  Name: <span className="card-ownername">{props.owners.name}</span>
        </h3>
            <p>Quote: {props.owners.quote}</p>
      </div>
    </div>
  );
};

export default AnimalCard;