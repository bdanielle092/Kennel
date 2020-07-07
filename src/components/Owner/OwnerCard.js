import React from "react";

const AnimalCard = () => {
  return (
    <div className="card">
      <div className="card-content">
        <picture>
          <img src={require("./owner.jpg")} alt="My Dog" />
        </picture>
        <h3>
          Name: <span className="card-ownername">Kate</span>
        </h3>
        <p>I love my dog Rio. Nashville doggie daycare is awesome!</p>
      </div>
    </div>
  );
};

export default AnimalCard;