import { useParams } from "react-router-dom";
import LunarEclipse from "../components/LunarEclipse";
import EclipseDescription from "../components/EclipseDescription";
import HybridEclipse from "../components/HybridEclipse";
import SolarEclipse from "../components/SolarEclipse";

const Eclipse = () => {
  const { eclipseType } = useParams();
  let eclipseTypeComponent;

  switch (eclipseType) {
    case "lunar":
      eclipseTypeComponent = <LunarEclipse />;
      break;
    case "hybrid":
      eclipseTypeComponent = <HybridEclipse />;
      break;
    case "solar":
      eclipseTypeComponent = <SolarEclipse />;
      break;
    default:
      null;
  }

  return (
    <>
      <EclipseDescription />
      {eclipseTypeComponent}
    </>
  );
};

export default Eclipse;
