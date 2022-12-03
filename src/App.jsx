import React from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import { HashRouter, Routes, Route } from "react-router-dom";
import TvShows from "./pages/TvShows";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/TvShows" element={<TvShows />} />
        {/* <Route path="/Login" element={<Login />} />
        <Route path="/SignUp" element={<SignUp />} /> */}
        <Route path="/:id" element={<About />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
