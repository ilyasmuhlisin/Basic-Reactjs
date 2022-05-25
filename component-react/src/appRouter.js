import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import App from "./component/home/App";
import Contact from "./component/page/Contact";

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  </BrowserRouter>
);

export default AppRouter;
