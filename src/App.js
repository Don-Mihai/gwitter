import React from "react";
import Main from "./pages/Main/Main.jsx";
import Home from "./pages/Home/Home.jsx";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="Home" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
