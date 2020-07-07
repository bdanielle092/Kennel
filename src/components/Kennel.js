import React from "react";
import AnimalCard from "./animal/AnimalCard";
import EmployeeCard from "../components/Employee/EmployeeCard"
import LocationCard from "../components/Location/LocationCard"
import OwnerCard from "../components/Owner/OwnerCard"
import "./Kennel.css";

const Kennel = () => {
  return (
    <div>
      <div>
        <h2>
          Student Kennels
          <br />
          <small>Loving care when you're not there.</small>
        </h2>
        <address>
          Visit Us at the Nashville North Location
          <br />
          500 Puppy Way
        </address>
      </div>
      <div className="container-cards">
        <AnimalCard />
        <AnimalCard />
        <AnimalCard />
        <EmployeeCard/>
        <LocationCard/>
        <OwnerCard/>
      </div>
      
    </div>
  );
};

export default Kennel;