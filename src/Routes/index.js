import React from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Home from "../pages/Home";
import NotFaund from "../pages/NotFound";
import Qrcode from "../pages/Qrcode";

function Router() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/qrcode">Qrcode</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/qrcode" element={<Qrcode />} />
        <Route path="*" element={NotFaund} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
