import React from "react";

const LocationCard = () => {
  return (
    <div className="card">
      <div className="card-content">
        <picture>
          <img src={require("./location.jpg")} alt="My Dog" />
        </picture>
        <h3>
          Name: <span className="card-locationname">Nashville Doggie Daycare</span>
        </h3>
        <p>Best doggie daycare in town</p>
      </div>
    </div>
  );
};

export default LocationCard;