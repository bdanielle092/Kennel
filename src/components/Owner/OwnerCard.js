import React from "react";
import "./Owner.css"

const AnimalCard = (props) => {
  return (
    <div className="card">
      <div className="card-content">
        <picture>
          <img className="ownerImg" src={require(`${props.owners.picture}`)} alt="owner" />
        </picture>
        <h3>
  Name: <span className="card-ownername">{props.owners.name}</span>
        </h3>
            <p>Quote: {props.owners.quote}</p>
            <button type="button" onClick={() => props.deleteOwner(props.owners.id)}>Closed</button>
      </div>
    </div>
  );
};

export default AnimalCard;