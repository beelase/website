

type SlideProps ={
     id: string,
    image: string,
    title: string,
    mainText: string,
    ctaText: string,
    ctaButton?: string,
    ctaHref?: string
}

export function Slide({id, image, title, mainText, ctaText, ctaButton, ctaHref}: SlideProps) {
  return (

      <div className="mu-slider-single" id={id}>
        <div className="mu-slider-img">
          <figure >
            <img src={image} alt="img"  />
          </figure>
        </div>
        <div className="mu-slider-content slick-list-sm">
          <h4>{title}</h4>
          <span></span>
          <h2>{mainText}</h2>
          <p>
            {ctaText}
          </p>
          {ctaHref  && (
          <a href={ctaHref} className="mu-read-more-btn">{ctaButton}</a>
           ) }
        </div>
      </div>

  );
}
