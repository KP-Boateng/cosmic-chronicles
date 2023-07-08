import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "@mui/icons-material";

const LunarEclipse = () => {
  return (
    <div className="text-white font-bold bg-slate-900 min-h-screen py-8 px-3">
      <h1 className=" text-2xl text-orange-special text-center">
        Lunar Eclipse
      </h1>
      <ul>
        <li className="mt-2">
          A lunar eclipse occures when the Earth comes between the Sun and the
          Moon, causing the Earth&apos;s shadow to fall on the Moon.
        </li>
        <li className="mt-2">
          There are three types of lunar eclipses: total, partial, and
          penumbral.
          <ul>
            <li className="mt-2">
              1. Total Lunar Eclipse: A total lunar eclipse takes place when teh
              Earth completely blocks direct sunlight from reaching the
              Moon.Instead, the Moon may appear reddish or coppery due to
              sunlight refracted by Earth&apos;s atmosphere, leading to a
              phenomenon also referred to as &quot;Blood Moon&quot;.
            </li>
            <li className="mt-2">
              2. Partial Lunar Eclipse: During a partial lunar eclipse, only a
              portion of the Moon passes through Earth&apos;s shadow, resulting
              in a stunning celestial display where the Moon darkens.
            </li>
            <li className="mt-2">
              3. Penumbral Lunar Eclipse: In a penumbral lunar eclipse, the Moon
              passes through the outer part of Earth&apos;s shadow, known as the
              penumbra. This causes the Moon to appear slightly dimmer, but the
              change is often subtle and challenging to distinguish.
            </li>
          </ul>
        </li>
      </ul>
      <div className="flex justify-between">
        <div>
          <p className="mt-2">
            Check out{" "}
            <span>
              <Link to={"/home/solar-system/eclipses/hybrid"}>
                <span className="border-b-2 border-orange-500">
                  Hybrid Eclipse
                </span>
                <ArrowRight className="right-arrow" />
              </Link>
            </span>
          </p>
        </div>
        <div>
          <p className="mt-2">
            <ArrowLeft className="right-arrow" />
            Go back to{" "}
            <span>
              <Link to={"/home/solar-system/eclipses/solar"}>
                <span className="border-b-2 border-orange-500">
                  Solar Eclipse
                </span>
              </Link>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LunarEclipse;
