import React from "react";
import { Route, Routes } from "react-router-dom";
import Welcome from "./pages/Welcome";
import HomePage from "./pages/HomePage";
import SolarSystem from "./pages/SolarSystem";
import Navigations from "./components/Navigation";
import Sun from "./pages/Sun";
import Eclipse from "./pages/Eclipse";
import SolarEclipse from "./components/SolarEclipse";
import EclipseDescription from "./components/EclipseDescription";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Welcome />} />
      {/* <Route path="/wow" element={<Navigate to={"/home"} replace />} /> */}
      <Route
        path="/home"
        element={
          <React.Fragment>
            <Navigations />
            <HomePage />
          </React.Fragment>
        }
      />
      <Route
        path="/home/solar-system"
        element={
          <React.Fragment>
            <Navigations />
            <SolarSystem />
          </React.Fragment>
        }
      />
      <Route
        path="/home/solar-system/sun"
        element={
          <React.Fragment>
            <Navigations />
            <Sun />
          </React.Fragment>
        }
      />
      <Route
        path="/home/solar-system/eclipses"
        element={
          <React.Fragment>
            <Navigations />
            <EclipseDescription />
            <SolarEclipse />
          </React.Fragment>
        }
      />
      <Route
        path="/home/solar-system/eclipses/:eclipseType"
        element={
          <React.Fragment>
            <Navigations />
            <Eclipse />
          </React.Fragment>
        }
      />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
