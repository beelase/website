
import ReactMarkdown from "react-markdown";
import { ContentElement } from "../interfaces";
import mentee from "../assets/images/mentoring/mentoringtwo.jpg";

export function SectionPicture(props: ContentElement) {

  const imgAlt: string = "Code Directions"
  return (
    <section id="mu-about-us">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="mu-about-us-area">
              <div className="mu-about-us-left">
                <div className="mu-title">
                  <h2 id="about-us-id">
                    {props.title}
                  </h2>
                  <h4>
                    <ReactMarkdown>{props.call}</ReactMarkdown>
                  </h4>
                </div>
                <ReactMarkdown>{props.text}</ReactMarkdown>

                  <a href={props.formLink} className="hover-shadow hover-color">
                    Apply here
                  </a>

              </div>
              <div className="mu-about-us-right">
                <figure>
                  <img src={props.imgPicture} alt={props.imgAlt} width="500" height="400" />
                </figure>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
