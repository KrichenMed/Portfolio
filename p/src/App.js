import { Route, Routes } from "react-router";
import "./App.css";
import Navb from "./Components/Navb";
import "bootstrap/dist/css/bootstrap.min.css";
import Grids from "./Components/Main";
import Footer from "./Components/Footer";
import React, { useState } from "react";

function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const handleThemeChange = (newSwitchState) => {
    setIsDarkTheme(newSwitchState);
    document.body.style.backgroundColor = newSwitchState
      ? "#111111"
      : "#e6e6e6";
  };

  return (
    <div className={`App ${isDarkTheme ? "light-theme" : "dark-theme"}`}>
      <Navb isDarkTheme={isDarkTheme} onThemeChange={handleThemeChange} />
      <div id="grids">
        <Grids />
      </div>
      <div className={`bg-animation ${isDarkTheme ? "-light" : "-dark"}`}>
        <div id={`stars1${isDarkTheme ? "-dark" : ""}`}></div>
        <div id={`stars2${isDarkTheme ? "-dark" : ""}`}></div>
        <div id={`stars3${isDarkTheme ? "-dark" : ""}`}></div>
        <div id={`stars4${isDarkTheme ? "-dark" : ""}`}></div>
      </div>
      <div id="footer">
        <Footer isDarkTheme={isDarkTheme} />
      </div>
      <Routes>
        <Route exact path="/{p}" />
      </Routes>
    </div>
  );
}

export default App;
