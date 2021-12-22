
import { FeatureCard } from "../components/FeatureCard";
import { ContentElement } from "../interfaces";

export function Program(props: ContentElement) {
  return (
    <section id="mu-features">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-6">
            <div className="mu-features-area">
              {/* <!-- Start Title --> */}
              <div className="mu-title">
                <h2 id="programmes-id">{props.title}</h2>
                <p>{props.call}</p>
              </div>
              <div className="mu-features-content">
                <div className="row">
                {/* <!-- Start features content --> */}
                {props.list?.map((item, index) => (
                  <FeatureCard key={index} {...item} />
                ))}
                {/* <!-- End features content --> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </section >
  );
}
