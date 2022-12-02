import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// import Navbar from "react-bootstrap/Navbar";
import Header from "./components/Header";
import Home from "./components/Home";
import LogIn from "./components/LogIn";
import { Routes, Route } from "react-router-dom";
import Details from "./components/Details";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/details" element={<Details />} />
      </Routes>
    </div>
  );
}

export default App;
