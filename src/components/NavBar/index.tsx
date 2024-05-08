import { useNavbar } from "../../hooks/useNavbar";
import { useWindowSize } from "../../hooks/useWindowSize";
import CartModal from "../Cart/cartModel";
import DesktopNav from "./DesktopNav";
interface WindowSize {
  width: number;
  height: number;
}

const ResponsiveComponent: React.FC = () => {
  const { width } = useWindowSize();

  const { NavBgPosition, isOpen, setIsOpen } = useNavbar();

  // Define your responsive logic here
  const isMobile = width <= 768;

  return (
    <>
      {isMobile ? (
        <p>This is a mobile view</p>
      ) : (
        <DesktopNav NavBgPosition={NavBgPosition} setIsOpen={setIsOpen}/>
      )}
      <CartModal isOpen={isOpen} setIsOpen={setIsOpen}/>
    </>
  );
};

export default ResponsiveComponent;
