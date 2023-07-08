import { ArrowRight } from "@mui/icons-material";
import { Link } from "react-router-dom";
import "../styles/solareclipse.css";

const SolarEclipse = () => {
  return (
    <div className="text-white font-bold bg-slate-900 min-h-screen py-8 px-3">
      <h1 className=" text-2xl text-orange-special text-center">
        Solar Eclipse
      </h1>
      <ul>
        <li className="mt-2">
          A solar eclipse happens when the Moon passes between the Sun and the
          Earth, blocking the Sun&apos;s light and casting a shadow on
          Earth&apos;s surface.
        </li>
        <li className="mt-2">
          There are three types of solar eclipses:
          <ul>
            <li className="mt-2">
              1. Total Solar Eclipse: During a total solar eclipse, the Moon
              completely covers the Sun, creating a surreal amount of darkness
              known as totality.This allows us to witness the Sun&apos;s corona,
              the outermost layer of its atmosphere, shimmering around the Moon.
            </li>
            <li className="mt-2">
              2. Partial Solar Eclipse: In a partial solar eclipse, the Moon
              partially obscures the Sun, creating a celestial spectacle where a
              portion of the Sun remains visible.
            </li>
            <li className="mt-2">
              3. Annular Solar Eclipse: An annular solar eclipse occurs when the
              Moon is farthest from Earth, and its apparent size appears smaller
              than the Sun&apos;.As a result, during the eclipse, a ring of
              light,also known as the &quot;ring of fire,&quot; surrounds the
              darkened silhouette of the Moon.
            </li>
          </ul>
        </li>
      </ul>
      <p className="mt-3">We did say there were three types right?</p>
      <p className="mt-2">
        Check out{" "}
        <span>
          <Link to={"/home/solar-system/eclipses/lunar"}>
            <span className="border-b-2 border-orange-500">Lunar Eclipse</span>
            <ArrowRight className="right-arrow" />
          </Link>
        </span>
      </p>
    </div>
  );
};

export default SolarEclipse;
