import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CtaContent from "./ctaContent";
import data from '../../utilities/ctaData'

const CtaCarousel = () => {
  return (
    <div>
      <CtaCarousel carouselData={data}/>
    </div>
  )
}

export default CtaCarousel