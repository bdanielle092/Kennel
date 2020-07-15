import React from "react";
import "./Location.css"


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

        <button type="button"
        onClick={() => { props.history.push(`/locations/${props.locations.id}/details`) }}>Details</button>
  <button type="button"
  onClick={() => props.history.push(`/locations/${props.locations.id}/edit`)}>
  Edit
</button>
<button type="button" onClick={() => props.deleteLocation(props.locations.id)}>Closed</button>
      </div>
    </div>
  );
};

export default LocationCard;