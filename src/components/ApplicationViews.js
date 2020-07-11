import { Route } from "react-router-dom";
import React from "react";
import Home from "./home/Home";
//only include these once they are built - previous practice exercise
import AnimalList from "./animal/AnimalList"
import LocationList from "./Location/LocationList"
import EmployeeList from "./Employee/EmployeeList"
import OwnerList from "./Owner/OwnerList"
import AnimalDetail from "./animal/AnimalDetail";
import EmployeeDetail from "./Employee/EmployeeDetail";
import LocationDetail from "./Location/LocationDetail";
import OwnerDetail  from "./Owner/OwnerDetail";
import AnimalForm from "./animal/AnimalForm"
import LocationForm from "./Location/LocationForm";
import EmployeeForm from "./Employee/EmployeeForm";
import OwnerForm from "./Owner/OwnerForm";


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
        exact
        path="/animals"
        render={props => {
          return <AnimalList {...props}/>;
        }}
      />
      <Route 
      // this is getting the id for each animal
      path="/animals/:animalId(\d+)" 
      render={(props) => {
  // Pass the animalId to the AnimalDetailComponent
     return <AnimalDetail animalId={parseInt(props.match.params.animalId)} 
     {...props} 
     />
     }} />
      <Route path="/animals/new" render={(props) => {
      return <AnimalForm {...props} />
      }} />
       <Route
        exact
        path="/locations"
        render={props => {
          return <LocationList {...props}/>;
        }}
      />
      <Route 
      path="/locations/:locationId(\d+)" 
      render={(props) => {
  // Pass the locationId to the LocationDetailComponent
     return <LocationDetail locationId={parseInt(props.match.params.locationId)} 
     {...props}
     />
}} />
    <Route path="/locations/new" render={(props) => {
  return <LocationForm {...props} />
}} />
      <Route
        exact
        path="/employees"
        render={props => {
          return <EmployeeList {...props}/>;
        }}
      />
      <Route 
      path="/employees/:employeeId(\d+)" render={(props) => {
    // Pass the employeeId to the EmployeeDetailComponent
      return <EmployeeDetail employeeId={parseInt(props.match.params.employeeId)}
      {...props}
      />
      }} />
      <Route path="/employees/new" render={(props) => {
      return <EmployeeForm {...props} />
      }} />
      <Route
        exact
        path="/owners"
        render={props => {
          return <OwnerList {...props}/>;
        }}
      />
       <Route 
       path="/owners/:ownerId(\d+)" 
       render={(props) => {
     // Pass the ownerId to the OwnerDetailComponent
      return <OwnerDetail ownerId={parseInt(props.match.params.ownerId)} 
     {...props}
      />
}} />
<Route path="/owners/new" render={(props) => {
  return <OwnerForm {...props} />
}} />
    </React.Fragment>
  );
};

export default ApplicationViews;