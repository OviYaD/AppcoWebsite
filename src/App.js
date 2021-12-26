import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Features from "./components/Features/Features";
import Benefits from "./components/Benefits/Benefits";
import ScreenshotPage from "./components/ScreenshotsPage/ScreenshotPage";
import Download from "./components/Download/Download";
import Contact from "./components/contact/contact";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Features />
      <Benefits />
      <ScreenshotPage />
      <Download />
      <Contact />
    </div>
  );
}

export default App;
