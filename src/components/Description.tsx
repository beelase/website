import ReactMarkdown from "react-markdown";
import { ContentElement } from "../interfaces";


export function Description(props: ContentElement) {
  return (
    <div id="mu-latest-courses">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="mu-latest-courses-area">
              <div className="mu-title">
                <h2>{props.title}</h2>
              </div>

              <div className="mu-description">
                <ReactMarkdown>{props.text}</ReactMarkdown>
                <p></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}