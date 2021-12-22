import { ListInterface } from '../interfaces';


export function FeatureCard(props: ListInterface) {
  return (
    <div className="col-lg-3 col-md-3  col-sm-6" key={props.id}>
      <div className="mu-single-feature p-4">
        <span>
          <img src={props.imgPicture} alt={props.imgAlt} />
        </span>
        <h4>{props.subtitle}</h4>
        <p>
          {props.text}
        </p>
        <br />
        <br />
        {props.listLink && (

        <a href={props.listLink}>
          More
        </a>
        )}
      </div>
    </div>


  );
}