import { Route, Redirect } from "react-router-dom";
import React from "react";
import Home from "./home/Home";
import Login from "./auth2/login";
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
import AnimalEditForm from "./animal/AnimalEditForm";
import LocationEditForm from "./Location/LocationEditForm";
import EmployeeEditForm from "./Employee/EmployeeEditForm";
import OwnerEditForm from "./Owner/OwnerEditForm";
import EmployeeWithAnimals from "./Employee/EmployeeWithAnimals";
import LocationWithEmployees from "./Location/LocationWithEmployees";



const ApplicationViews = () => {
  const isAuthenticated = () => sessionStorage.getItem("credentials") !== null;
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
      <Route path="/login" component={Login}/>

      <Route exact path="/animals" render={props => {
     if (isAuthenticated()) {
    return <AnimalList {...props} />
    } else {
    return <Redirect to="/login" />
   }
   }} />
      <Route 
      exact
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
      <Route path="/animals/:animalId(\d+)/edit" render={props => {
     if (isAuthenticated()) {
    return <AnimalEditForm {...props} />
     } else {
    return <Redirect to="/login" />
    }
}} />
       <Route
        exact
        path="/locations"
        render={props => {
          if (isAuthenticated()){
          return <LocationList {...props}/>;
          }else {
            return <Redirect to="login"/>
          }
        }}
      />
      <Route 
      exact
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
<Route path="/locations/:locationId(\d+)/edit" render={props => {
  if (isAuthenticated()) {
    return <LocationEditForm {...props} />
  } else {
    return <Redirect to="/login" />
  }
}} />
<Route path="/locations/:locationId(\d+)/details" render={(props) => {
    return <LocationWithEmployees {...props} />
}} />
      <Route
        exact
        path="/employees"
        render={props => {
          if(isAuthenticated()) {
            return <EmployeeList {...props} />
          }else {
          return <Redirect to="login"/>;
          }
        }}
      />
      <Route 
      exact
      path="/employees/:employeeId(\d+)" render={(props) => {
    // Pass the employeeId to the EmployeeDetailComponent
      return <EmployeeDetail employeeId={parseInt(props.match.params.employeeId)}
      {...props}
      />
      }} />
      <Route path="/employees/new" render={(props) => {
      return <EmployeeForm {...props} />
      }} />
      <Route path="/employees/:employeeId(\d+)/edit" render={props => {
  if (isAuthenticated()) {
    return <EmployeeEditForm {...props} />
  } else {
    return <Redirect to="/login" />
  }
}} />
<Route path="/employees/:employeeId(\d+)/details" render={(props) => {
    return <EmployeeWithAnimals {...props} />
}} />
      <Route
        exact
        path="/owners"
        render={props => {
          if (isAuthenticated()) {
          return <OwnerList {...props}/>;
          }else {
            return <Redirect to="/login"/>
          }
        }}
      />
       <Route 
       exact
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
<Route path="/owners/:ownerId(\d+)/edit" render={props => {
  if (isAuthenticated()) {
    return <OwnerEditForm {...props} />
  } else {
    return <Redirect to="/login" />
  }
}} />
    </React.Fragment>
  );
};

export default ApplicationViews;