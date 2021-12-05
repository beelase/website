import Slider from "react-slick";
import { Slide } from "./Slide";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

type slide = {
  id: string;
  image: string;
  title: string;
  ctaText: string;
  mainText: string;
  ctaButton: string;
  ctaHref: string;
};

type SliderProps = {
  slides: Array<slide>;
};

export function Carousel({ slides }: SliderProps) {
  const settings = {
    infinite: true,
    slidesToShow: 1,
    speed: 500,
    autoplaySpeed: 5000,
    arrows: true,
    autoplay: true,
    dots: false,
    touchThreshold: 10000,
    pauseOnHover: true,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div id="mu-slider">
      <Slider {...settings}>
        {slides.map((slide, index) => {
          const { id, image, title, ctaText, mainText, ctaButton, ctaHref } =
            slide;
          return (
            <Slide
              id={id}
              key={index}
              title={title}
              ctaText={ctaText}
              ctaHref={ctaHref}
              mainText={mainText}
              ctaButton={ctaButton}
              image={image}
            />
          );
        })}
      </Slider>
    </div>
  );
}
