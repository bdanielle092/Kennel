import React from "react";
import "./Animal.css"
import { Link } from "react-router-dom";
import {firstLetterCase} from '../../modules/helpers'


const AnimalCard = (props) => {
  return (
    <div className="card">
      <div className="card-content">
        <picture>
          <img className="animalImg" src={require(`${props.animals.picture}`)} alt="My Dog" />
        </picture>
        <h3>
          Name: <span className="card-petname">{firstLetterCase(props.animals.name)}</span>
        </h3>
      
       
        <Link to={`/animals/${props.animals.id}`}>
        <button>Details</button>
        </Link>
        <button type="button"
       onClick={() => props.history.push(`/animals/${props.animals.id}/edit`)}>
       Edit
      </button>
      <button type="button" onClick={() => props.deleteAnimal(props.animals.id)}>Discharge</button>
      </div>
    </div>
  );
};

export default AnimalCard;