import React from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import { HashRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<About />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
