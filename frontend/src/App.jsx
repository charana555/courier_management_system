import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Auth from "./Components/auth/Auth";
import Orders from "./Components/courier/Orders";
import Details from "./Components/courier/Details";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/auth" element={<Auth />} />
        <Route path="/" element={<Orders />} />
        <Route path="/details" element={<Details />} />
      </Routes>
    </Router>
  );
};

export default App;
