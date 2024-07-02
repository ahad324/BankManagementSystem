import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "./components/MainPage";
import Logo from "./components/Logo";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/logo" element={<Logo />} />
      </Routes>
    </Router>
  );
}

export default App;
