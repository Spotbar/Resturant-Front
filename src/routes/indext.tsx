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
import Factors from "../pages/Admin/Factor/Factors";
import CreateFactor from "../pages/Admin/Factor/CreateFactor";
import EditFactor from "../pages/Admin/Factor/EditFactor";
import FactorDetails from "../pages/Admin/Factor/FactorDetails";
import UnRecordedOrders from "../pages/Admin/UnrecordedOrders/UnRecordedOrders";
import CreateOrdersFactor from "../pages/Admin/Factor/CreateOrdersFactor";

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
      <Route path="/FactorDetails/:id" element={<FactorDetails />} />
      <Route path="/UnrecordedOrders" element={<UnRecordedOrders />} />
      <Route path="UnrecordedOrders/CreateOrdersFactor/:id" element={<CreateOrdersFactor />} />
    </Routes>
  );
}
export {};
