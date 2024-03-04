import { Route, Routes } from "react-router";
import "./App.css";
import Navb from "./Components/Navb";
import "bootstrap/dist/css/bootstrap.min.css";
import Grids from "./Components/Main";
import Footer from "./Components/Footer";
import React, { useState } from "react";
import HandwrittenTextAnimation from "./Components/HandWrittenSVG";

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
      <div style={{ position: "fixed", zIndex: "9999999999999999999999999" }}>
        <HandwrittenTextAnimation />
      </div>
      <Navb isDarkTheme={isDarkTheme} onThemeChange={handleThemeChange} />
      <div className={`Grids${isDarkTheme ? "-light" : "-dark"}`}>
        <Grids isDarkTheme={isDarkTheme} />
      </div>
      <div className={`bg-animation ${isDarkTheme ? "-light" : "-dark"}`}>
        <div id={`stars1${isDarkTheme ? "-dark" : ""}`}></div>
        <div id={`stars2${isDarkTheme ? "-dark" : ""}`}></div>
        <div id={`stars3${isDarkTheme ? "-dark" : ""}`}></div>
        <div id={`stars4${isDarkTheme ? "-dark" : ""}`}></div>
      </div>
      <div
        id="footer"
      >
        <Footer isDarkTheme={isDarkTheme} />
      </div>
      <Routes>
        <Route exact path="/{p}" />
      </Routes>
    </div>
  );
}

export default App;
