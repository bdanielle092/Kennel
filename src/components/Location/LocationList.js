import React, { useState, useEffect } from 'react';
// import the components we will need 
import LocationCard from './LocationCard';
import LocationManager from '../../modules/LocationManager'

const LocationList = (props) => {
  // The initial state is an empty array
  const [locations, setLocations] = useState([]);

  const getLocations = () => {
// After the data comes back from the API, we 
// use the setLocations function to update state
    return LocationManager.getAll().then(locationsFromAPI => {
      setLocations(locationsFromAPI)
    });
  };
  const deleteLocation = id => {
    LocationManager.delete(id)
      .then(() => LocationManager.getAll().then(setLocations));
  };
// got the locations from the API on the component's frist render
  useEffect(() => {
    getLocations();
  }, []);
// Finally we use map() to loop over the locations array to show a list of location cards
  return(
    <>
    {/* add this button above your display of location cards */}
    {props.hasUser
?<section className="section-content">
  <button type="button"
      className="btn"
      onClick={() => {props.history.push("/locations/new")}}>
      Admit Location
  </button>
</section>
: null }
    <div className="container-cards">
      {locations.map(location => <LocationCard key={location.id} locations={location} deleteLocation={deleteLocation} {...props}/>)}
    </div>
    </>
  );
};

export default LocationList