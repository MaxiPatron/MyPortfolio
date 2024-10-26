import React from "react";
import "./index.css";
import Home from "./routes/Home";
import About from "./routes/About";

import { Route, Routes } from "react-router-dom";

function App() {
  return <div>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/About" element={<About />} />
    </Routes>
  </div>
}

export default App;