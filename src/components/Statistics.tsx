import { ContentElement } from "../interfaces";
import satisfaction from "../assets/images/icons/customer-satisfaction.png";
import learned from "../assets/images/icons/inspiration.png";
import landJob from "../assets/images/icons/mission-accomplished.png";
import recomend from "../assets/images/icons/love.png";
import overalRate from "../assets/images/icons/stars.png";


export function Statistics(props: ContentElement) {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="mu-latest-courses-area">
            <div className="mu-title">
              <h2>{props.title}</h2>
             {/*  {props.values.map((type) => (
                <div className="col-md-4">
                  <h4> {type.id} Evaluation</h4>
                  <br />
                  aaaaa
                    {type.evaluation.map((item) => {
                      console.log(item.id);
                      <div className="col">
                        <p>bbbb</p>
                       <img src={item.id} alt={item.id} />
                      </div>
                    })}
                 
                </div>
              ))}  */}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}