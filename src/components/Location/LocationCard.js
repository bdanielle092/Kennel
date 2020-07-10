import React from "react";
import "./Location.css"
import { Link } from "react-router-dom";

const LocationCard = (props) => {
  return (
    <div className="card">
      <div className="card-content">
        <picture>
          <img className="locationImg" src={require(`${props.locations.picture}`)} alt="location" />
        </picture>
        <h3>
  Name: <span className="card-locationname">{props.locations.name}</span>
        </h3>
  <p>Quote: {props.locations.quote}</p>
  <button type="button" onClick={() => props.deleteLocation(props.locations.id)}>Closed</button>
   <Link to={`/locations/${props.locations.id}`}>
   <button>Details</button>
  </Link>
      </div>
    </div>
  );
};

export default LocationCard;