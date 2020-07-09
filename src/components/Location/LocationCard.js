import React from "react";

const LocationCard = (props) => {
  return (
    <div className="card">
      <div className="card-content">
        <picture>
          <img src={require(`${props.locations.picture}`)} alt="location" />
        </picture>
        <h3>
  Name: <span className="card-locationname">{props.locations.name}</span>
        </h3>
  <p>Quote: {props.locations.quote}</p>
      </div>
    </div>
  );
};

export default LocationCard;