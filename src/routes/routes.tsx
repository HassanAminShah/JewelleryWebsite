import React from "react";
import { Route, Routes } from "react-router-dom";
import Cart from "../components/CartComponent";
import Homepage from "../app/Homepage/index";
import About from "../app/About/index";
import Sizes from "../app/Sizes/index";
import Reviews from "../app/Reviews/index";
import Contact from "../app/Contact/index";
import Collection from "../app/Collection/index";
import ProtectedRoutes from "../utils/ProtectedRoutes";
import Admin from "../app/Admin";
import Login from "../app/authentication/Login";

const AppRoutes = () => {
  //   const user = null;

  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/about" element={<About />} />
      <Route path="/sizes" element={<Sizes />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/collection" element={<Collection />} />
      <Route path="/reviews" element={<Reviews />} />
      <Route path="/login" element={<Login />} />
      <Route element={<ProtectedRoutes />}>
        <Route path="/admin" element={<Admin />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
