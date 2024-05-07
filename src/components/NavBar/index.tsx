import { useWindowSize } from "../../hooks/useWindowSize";
import DesktopNav from "./DesktopNav";
interface WindowSize {
  width: number;
  height: number;
}

const ResponsiveComponent: React.FC = () => {
  const { width } = useWindowSize();

  // Define your responsive logic here
  const isMobile = width <= 768;

  return (
    <>
      {isMobile ? (
        <p>This is a mobile view</p>
      ) : (
        <DesktopNav/>
      )}
    </>
  );
};

export default ResponsiveComponent;
