import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CtaContent from "./ctaContent";
import CtaData, {ctaDataType} from '../../utilities/ctaData'

interface CtaData{
  id: number;
  img: string;
  headline: string;
  details: string;
}


const CtaCarousel = () => {
  const settings: any = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000
  };

  return (
    <div className="bg-[#E9EAEB]">
      <Slider {...settings}> 
        {
          CtaData.map((cta: ctaDataType)=>(
            <CtaContent key={cta.id} ctaData={cta}/>
          ))
        }
      </Slider>
     
    </div>
  )
}

export default CtaCarousel