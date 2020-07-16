import React, { useState, useEffect } from 'react';
//import the components we will need
import AnimalCard from './AnimalCard';
import AnimalManager from '../../modules/AnimalManager';

// It dispalys all the animal cards in kennel.js
const AnimalList = (props) => {
  // The initial state is an empty array
  const [animals, setAnimals] = useState([]);
  // gets all animals from the api 
  const getAnimals = () => {
    // After the data comes back from the API, we
    //  use the setAnimals function to update state
    return AnimalManager.getAll().then(animalsFromAPI => {
      setAnimals(animalsFromAPI)
    });
  };
  // this is the delete 
  // delete animal
  const deleteAnimal = id => {
    AnimalManager.delete(id)
    // then refreash page with all the animal on the page 
      .then(() => AnimalManager.getAll().then(setAnimals));
  };

  // got the animals from the API on the component's first render
  useEffect(() => {
    getAnimals();
  }, []);

  // Finally we use map() to "loop over" the animals array to show a list of animal cards
  return (
    <>
    
    {/* this is the admit new animal button */}
<section className="section-content">
  <button type="button"
      className="btn"
      onClick={() => {props.history.push("/animals/new")}}>
      Admit Animal
  </button>
</section>
{/* key is the id number, animals is animal in the json-server, delete animal is how you delete, props is all the properties */}
    <div className="container-cards">
      {/* maping through the animal card */}
      {animals.map(animal => 
      <AnimalCard 
      key={animal.id} 
      animals={animal} 
      deleteAnimal={deleteAnimal} 
      {...props}/>)}
    </div>
    </>
  );
};
export default AnimalList