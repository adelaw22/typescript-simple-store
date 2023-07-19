import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CtaContent from "./ctaContent";
import data from '../../utilities/ctaData'

interface CtaData{
  id: number;
  img: string;
  headline: string;
  details: string;
}


const CtaCarousel = () => {
  const settings: any = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000
  };
  console.log(data)

  return (
    <div>
      <Slider {...settings}> 
        {
          data.map((cta: CtaData)=>(
            <CtaContent key={cta.id} ctaData={cta}/>
          ))
        }
      </Slider>
     
    </div>
  )
}

export default CtaCarousel