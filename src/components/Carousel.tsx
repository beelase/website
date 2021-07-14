
import Slider from "react-slick";
import { Slide } from "./Slide";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



type slide = { 
  id: string, 
  image: string, 
  title: string, 
  ctaText: string, 
  mainText: string, 
  ctaButton: string, 
  ctaHref: string} ;

type SliderProps = {
  slides: Array<slide>;

};


export function Carousel( { slides }: SliderProps) {
 
  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipe: true,
    speed: 350,
    autoplaySpeed: 3000,
    autoplay: true,
    dots: true,
    touchThreshold: 1000,
    className: "mu-slider",
    useCss: true,
    }

  return (
    <div id="mu-slider"  >
      <Slider {...settings}>
       {slides.map((slide, index) => {
        const { id, image, title, ctaText, mainText, ctaButton, ctaHref } = slide;
        return  (
        <Slide id={id} key={index} 
        title={title} ctaText={ctaText}
        ctaHref={ctaHref} mainText={mainText} 
        ctaButton={ctaButton} image={image}/> 
        ) ;
      })}  
     
     
      </Slider>
      </div>

  );
}
