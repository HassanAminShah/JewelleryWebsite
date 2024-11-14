import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../../app/authentication/Login";

const index = () => {
  return (
    <div>
      <Routes>
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
};

export default index;
