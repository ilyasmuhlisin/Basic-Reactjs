import React, { Component } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import App from "./App";
import Home from "./home";
import Film from "./film";
import Actor from "./actor";
// import ProtectedRoute from "./auth/protected-route";

class AppRoutes extends Component {
  render() {
    return (
      <Router>
        <App />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/film" element={<Film />} />
          <Route path="/actor" element={<Actor />} />
        </Routes>
      </Router>
    );
  }
}

export default AppRoutes;
