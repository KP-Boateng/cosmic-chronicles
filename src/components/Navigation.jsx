import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowDropDown, ArrowDropUp } from "@mui/icons-material";
import "../styles/navigation.css";

const Navigations = () => {
  const [showSolarSystemSublist, setShowSolarSystemSublist] = useState(false);

  const toggleSublist = () => {
    setShowSolarSystemSublist(!showSolarSystemSublist);
  };

  return (
    <nav className="bg-slate-900 text-white font-bold p-2">
      <ul className="flex justify-evenly">
        <li className="flex-grow flex justify-center">
          <Link className="link blink" to={"/home/solar-system"}>
            Solar System
          </Link>
          {!showSolarSystemSublist ? (
            <ArrowDropDown className="arrow" onClick={toggleSublist} />
          ) : (
            <ArrowDropUp className="arrow" onClick={toggleSublist} />
          )}
          {/* <ArrowDropDown onClick={toggleSublist} /> */}
          {showSolarSystemSublist && (
            <ul className="relative top-8 -left-8 text-center">
              <li>
                <Link to={"/home/solar-system/sun"} className="blink">
                  The Sun
                </Link>
              </li>
              <li>
                <Link to={"/home/solar-system/eclipses"} className="blink">
                  Eclipses
                </Link>
              </li>
              <li>
                <Link to={"/home/solar-system/asteroids"} className="blink">
                  Asteroids
                </Link>
              </li>
              <li>
                <Link to={"/home/solar-system/comets"} className="blink">
                  Comets
                </Link>
              </li>
              <li>
                <Link to={"/home/solar-system/meteorites"} className="blink">
                  Meteorites
                </Link>
              </li>
            </ul>
          )}
        </li>
        <li className="flex-grow text-center">
          <Link className="blink">Galaxies</Link>
          <ArrowDropDown className="arrow" />
        </li>
        <li className="flex-grow text-center">
          <Link className="blink">Planets</Link>
          <ArrowDropDown className="arrow" />
        </li>
        <li className="flex-grow text-center">
          <Link className="blink">Stars</Link>
          <ArrowDropDown className="arrow" />
        </li>
      </ul>
    </nav>
  );
};

export default Navigations;
