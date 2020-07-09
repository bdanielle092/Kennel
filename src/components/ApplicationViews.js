import { Route } from "react-router-dom";
import React from "react";
import Home from "./home/Home";
//only include these once they are built - previous practice exercise
import AnimalList from "./animal/AnimalList"
import LocationList from "./Location/LocationList"
import EmployeeList from "./Employee/EmployeeList"
import OwnerList from "./Owner/OwnerList"


const ApplicationViews = () => {
  return (
    // line 13 is wrapping everything so you don't have to add another div
    <React.Fragment>
      <Route
        exact
        path="/"
        render={props => {
          return <Home />;
        }}
      />
      <Route
        path="/animals"
        render={props => {
          return <AnimalList/>;
        }}
      />
       <Route
        path="/locations"
        render={props => {
          return <LocationList/>;
        }}
      />
      <Route
        path="/employees"
        render={props => {
          return <EmployeeList/>;
        }}
      />
      <Route
        path="/owners"
        render={props => {
          return <OwnerList />;
        }}
      />
      
    </React.Fragment>
  );
};

export default ApplicationViews;