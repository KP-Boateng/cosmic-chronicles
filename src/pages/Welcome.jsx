import { Link } from "react-router-dom";
import "../styles/welcome.css";

const Welcome = () => {
  return (
    <div className="welcome bg-slate-900 min-h-screen flex flex-col justify-center items-center">
      <div>
        <h1 className="text-center font-extrabold text-4xl mb-2 text-orange-special">
          Cosmic Chronicles
        </h1>
      </div>
      <div>
        <button className="bg-blue-600 p-3 rounded-xl text-white">
          <Link title="Get started" className="font-bold" to={"/home"}>
            Let&apos;s get started
          </Link>
        </button>
      </div>
    </div>
  );
};

export default Welcome;
