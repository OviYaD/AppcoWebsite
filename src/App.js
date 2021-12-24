import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Features from "./components/Features/Features";
import Benefits from "./components/Benefits/Benefits";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Features />
      <Benefits />
    </div>
  );
}

export default App;
