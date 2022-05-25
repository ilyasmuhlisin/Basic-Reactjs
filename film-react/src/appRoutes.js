import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App";
import Home from "./home"

class AppRoutes extends Component {
  render() {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </Router>
    );
  }
}

export default AppRoutes;
