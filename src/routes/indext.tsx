import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "../pages/Authentication/Login";
// import Main from "../pages/Main";
import PrivateRoute from "./privateRoute";
import Home from "../pages/Home";
import Bill from "../pages/Bill/Bills";
import Reserve from "../pages/Activities/Reserve";
import Profile from "../pages/Profile";
import CreateRestaurant from "../pages/Admin/Restaurant/CreateRestaurant";
import EditRestaurant from "../pages/Admin/Restaurant/EditRestaurant";
import Restaurants from "../pages/Admin/Restaurant/Restaurants";

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
      <Route path="/Profile" element={<Profile />} />
      <Route path="/Reserve" element={<Reserve />} />
      <Route path="/CreateRestaurant" element={<CreateRestaurant />} />
      <Route path="/EditRestaurant" element={<EditRestaurant />} />
      <Route path="/Restaurants" element={<Restaurants />} />
      <Route path="/Reserve" element={<Reserve />} />
    </Routes>
  );
}
export {};
