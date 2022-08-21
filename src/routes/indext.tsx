import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "../pages/Authentication/Login";
// import Main from "../pages/Main";
import Home from "../pages/Home";
import Bill from "../pages/Bill/Bills";
import PrivateRoute from "./privateRoute";

export default function AspadanaRoutes() {
  return (
    <Routes>
      <Route path="/" element={<PrivateRoute />}>
        {/* <Route path="/" element={<Cargoes />} />
          <Route path="/profile" element={<Profile />} /> */}
      </Route>
      <Route path="/login" element={<Login />} />
      <Route path="/Home" element={<Home />} />
      <Route path="/Bills" element={<Bill />} />
    </Routes>
  );
}
export {};
