import React from "react";
import "./home.css"

const Home = () => {
  return (
    <div className="home">
    <picture>
    <img className="homeImg" src={require(`./home.jpg`)} alt="Dog"/>
    </picture>
    
    <h2>
     Doggie Kennels
      <br />
      <small>Loving care when you're not there.</small>
    </h2>
    <address>
      Visit Us at the Nashville North Location
      <br />
      500 Puppy Way
    </address>
    </div>
  );
 };

export default Home;