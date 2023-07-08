import { Link } from "react-router-dom";

const SolarSystem = () => {
  return (
    <div className="text-white font-bold bg-slate-900 min-h-screen p-3">
      <h1 className="text-orange-special text-center text-3xl mb-3 mt-8">
        The Solar System
      </h1>
      <p className="mb-4">
        Welcome to the ultimate space of adventure - it&apos;s like Disneyland,
        but with way more stars!
      </p>
      <p className="mb-4">
        Our solar System is the ultimate playground for cosmic explorers, with{" "}
        <span className="border-orange-400 border-b-2">eight planets </span>that
        are just begging to be discovered
      </p>
      <p className="mb-4">
        From the scorching heat of Mercury to the chilly embrace of{" "}
        <span className="border-orange-400 border-b-2">Neptune</span>,
        theret&apos;s something for everyone in this cosmic wonderland
      </p>
      <p className="mb-4">
        And let&apos;s not forget about the{" "}
        <span className="border-orange-400 border-b-2">
          <Link to="/home/solar-system/sun">Sun</Link>
        </span>{" "}
        - itt&apos;s like the ultimate power source, fueling everything from
        sunbathing to photosynthesis. Plus, there are countless{" "}
        <span className="border-orange-400 border-b-2">asteroids, comets</span>{" "}
        and other celestial bodies just floating around out there, like a
        never-ending game of space dodgeball.
      </p>
      <p className="mb-4">
        So grab your spacesuit, click those arrow buttons and join us on an
        adventure of astronomical proportions - the universe is waiting.
      </p>
    </div>
  );
};

export default SolarSystem;
