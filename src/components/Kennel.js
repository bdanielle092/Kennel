import React, {useState} from "react";
import NavBar from "./nav/NavBar";
import ApplicationViews from "./ApplicationViews";

import "./Kennel.css";

const Kennel = () => {
  const isAuthenticated = () => sessionStorage.getItem("credentials") !== null;
// hasUser calls for the credentials
  const [hasUser, setHasUser] = useState(isAuthenticated());
//  this is calling hasState
  const setUser = user => {
    sessionStorage.setItem("credentials", JSON.stringify(user));
    setHasUser(isAuthenticated());
  };
  // clearing our seesionStorage
  const clearUser = () => {
    sessionStorage.clear();
    setHasUser(isAuthenticated());
  }
  return (
    <>
    <NavBar hasUser={hasUser} clearUser={clearUser} />
    <ApplicationViews hasUser={hasUser} setUser={setUser}/>
  </>
  );
};

export default Kennel;