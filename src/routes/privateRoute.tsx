import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = () => {

  const auth =false
    // JSON.parse(localStorage.getItem('login') || false) &&
    // (localStorage.getItem('deviceId').length > 0 &&
    //   localStorage.getItem('devicePassword').length > 0)

  console.log(auth)



  // const auth = false; // determine if authorized, from context or however you're doing it

  // If authorized, return an outlet that will render child elements
  // If not, return element that will navigate to login page
  return auth ? <Outlet /> : <Navigate to="/login" />;
};
export default PrivateRoute;