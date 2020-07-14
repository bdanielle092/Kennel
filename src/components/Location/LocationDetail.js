import React, { useState, useEffect } from 'react';
import LocationManager from '../../modules/LocationManager';
import './LocationDetail.css'

const LocationDetail = props => {
  const [locations, setLocation] = useState({ name: "", address: "" , picture: "" });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    //get(id) from LocationManager and hang on to the data; put it into state
    LocationManager.get(props.locationId)
      .then(locations => {
        setLocation({
          name: locations.name,
          address: locations.address,
          picture: locations.picture
        });
        setIsLoading(false);
      });
  }, [props.locationId]);

  const handleDelete = () => {
    //invoke the delete function in LocationManger and re-direct to the location list.
    setIsLoading(true);
    LocationManager.delete(props.locationId).then(() =>
      props.history.push("/locations")
    );
  };

  return (
    <div className="card">
      <div className="card-content">
        { (locations.picture !== "") &&
        <picture>
          <img src={require(`${locations.picture}`)} alt="location" />
        </picture>
        }
        <h3>Name: <span style={{ color: 'darkslategrey' }}>{locations.name}</span></h3>
        <p>Adress: {locations.address}</p>
        <button type="button" disabled={isLoading} onClick={handleDelete}>Closed</button>
      </div>
    </div>
  );
}

export default LocationDetail;