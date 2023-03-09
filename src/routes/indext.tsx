import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "../pages/Authentication/Login";
// import Main from "../pages/Main";
import PrivateRoute from "./privateRoute";
import Home from "../pages/Home";
import Bill from "../pages/Bill/Bills";
import Reserve from "../pages/Activities/Reserve";

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
      <Route path="/Bills" element={<Bill />} />
      <Route path="/Reserve" element={<Reserve/>}/>
    </Routes>
  );
}
export {};
