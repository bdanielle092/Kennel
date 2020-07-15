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
     
  Adress: <span className="card-locationAddress">{props.locations.address}</span>
       
        
       {props.hasUser
        ?<button type="button"
        onClick={() => { props.history.push(`/locations/${props.locations.id}/details`) }}>Details</button>
        : null}
        {props.hasUser
  ?<button type="button"
  
  onClick={() => props.history.push(`/locations/${props.locations.id}/edit`)}>
  Edit
</button>
: null}
{props.hasUser
?<button type="button" onClick={() => props.deleteLocation(props.locations.id)}>Closed</button>
: null}
      </div>
    </div>
  );
};

export default LocationCard;