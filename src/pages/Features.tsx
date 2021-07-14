import podcastImg from "../assets/images/icons/microphone.svg";
import mentoringImg from "../assets/images/icons/social-care.svg";
import newsletterImg from "../assets/images/icons/letter.svg";
import eventsImg from "../assets/images/icons/calendar.svg";

export function Features() {
  return (
    <section id="mu-features">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-6">
            <div className="mu-features-area">
              {/* <!-- Start Title --> */}
              <div className="mu-title">
                <h2 id="programmes-id">Our Programmes and Activities</h2>
              </div>
              {/* <!-- End Title -->
            <!-- Start features content --> */}
              <div className="mu-features-content">
                <div className="row">
                  <div className="col-lg-3 col-md-3  col-sm-12">
                    <div className="mu-single-feature">
                      <span>
                        <img src={podcastImg} alt="podcast" />
                      </span>
                      <h4>Beela's Talk</h4>
                      <p>
                        A seasonal podcast with amazing guests who share their
                        inspiring stories of diversity, equity and inclusion in
                        the tech industry.
                      </p>
                      <br />
                      <br />

                      <a href="https://open.spotify.com/show/1B1xgKaplQwslW05BoRDmX?si=g6MBIBsWTOGFACXXA4LQQg">
                        Listen
                      </a>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-3  col-sm-6">
                    <div className="mu-single-feature">
                      <span>
                        <img src={mentoringImg} alt="Pollination" />
                      </span>
                      <h4>Pollination Mentoring Program</h4>
                      <p>
                        We match immigrant women in a career transition with
                        established women in the tech industry to provide
                        mentorship, career coaching, and support.
                      </p>

                      <a href="mentoring.html">Read More</a>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-3  col-sm-6">
                    <div className="mu-single-feature">
                      <span>
                        <img src={newsletterImg} alt="Newsletter" />
                      </span>
                      <h4>Newsletter</h4>
                      <p>
                        Bi-weekly newsletter with tips for a career transition
                        into tech. Monthly calendar advertising courses,
                        bootcamps, and events for beginners.
                      </p>
                      <br />
                      <br />
                      <a
                        href=" https://beela.us1.list-manage.com/subscribe/post?u=ec3f144b4e769635dffef5601&amp;id=92a05c0895"
                        target="_blank"
                      >
                        Sign up
                      </a>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-3  col-sm-6">
                    <div className="mu-single-feature">
                      <span>
                        <img src={eventsImg} alt="Event" />
                      </span>
                      <h4>Events</h4>
                      <p>
                        Workshops and talks where we invite guest speakers to
                        share their talents &amp; experience with our community.
                        Check our events on our Linkedin posts.
                        <br />
                      </p>
                      <br />
                      <a
                        href="https://www.linkedin.com/company/beela-se/"
                        target="_blank"
                      >
                        Search
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- End features content --> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
