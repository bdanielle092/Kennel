import React from "react";
import "./Animal.css"
import { Link } from "react-router-dom";
import {firstLetterCase} from '../../modules/helpers'

// this is the animal card that display on the site
// calling animal properties from json-server
const AnimalCard = (props) => {
  // we then return the info. on the cards 
  return (
    <div className="card">
      <div className="card-content">
        {/* this is saying if there no picture don't go on, if picture is there go on to next line */}
       {(props.animals.picture !== undefined)&&
      //  this is the animal picture
        <picture>
          <img className="animalImg" src={require(`${props.animals.picture}`)} alt="My Dog" />
        </picture>
        }
        {/* this is the animal names */}
        <h3>
          Name: <span className="card-petname">{firstLetterCase(props.animals.name)}</span>
        </h3>
       {/* all fetch calls are in AnimalManager */}
       {/* this is the detail button */}
       {/* its links to the url to render the detail card. http://localhost:3000/animals/1 */}
        <Link to={`/animals/${props.animals.id}`}>
        <button>Details</button>
        </Link>
        {/* this is the edit button */}
        <button type="button"
       onClick={() => props.history.push(`/animals/${props.animals.id}/edit`)}>
       Edit
      </button>
      {/* this is the delete button */}
      <button type="button" onClick={() => props.deleteAnimal(props.animals.id)}>Discharge</button>
      </div>
    </div>
  );
};

export default AnimalCard;