// App.js
import React from "react";
import { Routes, Route } from "react-router-dom";
import LoginPage from "./LoginPage"; // Adjust path as necessary
import HomePage from "./Components/FrontPage/FrontPage"; // Adjust path as necessary
import portfolio from "../portfolio";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/portfolio" element={<portfolio />} />
      <Route path="/home" element={<HomePage />} />
    </Routes>
  );
};
export default App;
