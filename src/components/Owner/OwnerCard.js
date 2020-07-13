import React from "react";
import "./Owner.css"
import { Link } from "react-router-dom";

const OwnerCard = (props) => {
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
       
            <Link to={`/owners/${props.owners.id}`}>
            <button>Details</button>
            </Link>
            <button type="button"
  onClick={() => props.history.push(`/owners/${props.owners.id}/edit`)}>
  Edit
</button>
<button type="button" onClick={() => props.deleteOwner(props.owners.id)}>Remove</button>
      </div>
    </div>
  );
};

export default OwnerCard;