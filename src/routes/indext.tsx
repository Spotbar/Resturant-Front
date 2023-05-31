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
import FactorTable from "../components/Factor/factorTable";
import Factors from "../pages/Admin/Factor/Factors";
import CreateFactor from "../pages/Admin/Factor/CreateFactor";
import EditFactor from "../pages/Admin/Factor/EditFactor";

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

      <Route path="/Restaurants" element={<Restaurants />} />
      <Route path="/CreateRestaurant" element={<CreateRestaurant />} />
      <Route path="/EditRestaurant/:id" element={<EditRestaurant />} />

      <Route path="/Factors" element={<Factors />} />
      <Route path="/CreateFactor" element={<CreateFactor />} />
      <Route path="/EditFactor/:id" element={<EditFactor />} />
    </Routes>
  );
}
export {};
