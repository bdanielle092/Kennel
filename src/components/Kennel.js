import React, {useState} from "react";
import NavBar from "./nav/NavBar";
import ApplicationViews from "./ApplicationViews";
import "./Kennel.css";
// this is the main page for the site
const Kennel = () => {
  // its making sure that its an real user
  const isAuthenticated = () => sessionStorage.getItem("credentials") !== null;
 //setting the state of user, calling isAuthenticated and makeing sure there's a value
  const [hasUser, setHasUser] = useState(isAuthenticated());
 //set a user that passes in the user, enables us to call setting the state, checks wether or not someone is logged in, 
// can only change state where it lives, creating function
  const setUser = user => {
    sessionStorage.setItem("credentials", JSON.stringify(user));
   
    setHasUser(isAuthenticated());
  };
  // this is a function that clears our seesionStorage
  const clearUser = () => {
    sessionStorage.clear();
    // passing down to all of the childern 
    setHasUser(isAuthenticated());
  }
  return (
    <>
    {/* showing weather your logged in or not, true or false  */}
    <NavBar hasUser={hasUser} clearUser={clearUser} />
    {/* is able to pass function and change state in application views  */}
    <ApplicationViews hasUser={hasUser} setUser={setUser}/>
  </>
  );
};

export default Kennel;