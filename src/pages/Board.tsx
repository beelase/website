import julianaImg from "../assets/images/board/juliana.png";
import deniseImg from "../assets/images/board/denise.png";
import maryamImg from "../assets/images/board/maryam.png";
import beelaLogo from "../assets/images/board/logo.png";

export function Board() {
  return (
    <section id="mu-our-teacher">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="mu-our-teacher-area">
              {/* <!-- begin title --> */}
              <div className="mu-title">
                <h2>Who are we?</h2>
                <p>
                  Beela is a support network that empowers immigrant women &amp;
                  non-binary people in Sweden to join the tech world promoting
                  diversity, equity, and inclusion. </p>
                  <p>We started Beela because we
                  understand the challenges of starting over in a new country
                  with a lack of opportunities and support networks.
                </p>
                <p>
                  Meet The Queens, the amazing women who created this
                  initiative.
                </p>
              </div>
              {/* <!-- end title -->
            <!-- begin our staff content --> */}
              <div className="mu-our-teacher-content">
                <div className="row">
                  <div className="col-lg-3 col-md-3  col-sm-6">
                    <div className="mu-our-teacher-single">
                      <figure className="mu-our-teacher-img">
                        <img src={julianaImg} alt="Juliana Araujo" />
                        <div className="mu-our-teacher-social">
                          <a href="juliana.araujo@beela.se">
                            <span className="fa fa-envelope"></span>
                          </a>
                          <a
                            href="https://www.linkedin.com/in/jularase/"
                            target="_blank" rel="noreferrer"
                          >
                            <span className="fa fa-linkedin"></span>
                          </a>
                        </div>
                      </figure>
                      <div className="mu-ourteacher-single-content">
                        <h4>Juliana Araújo</h4>
                        <span>Founder &amp; CEO</span>
                        <p>
                          Latina immigrant with 8+ years of experience working
                          in tech, leading product teams to develop data-driven
                          products. She has a Bachelor's in Information Systems
                          and is currently writing her master thesis in IT
                          Project Management from Stockholm University.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-3 col-sm-6">
                    <div className="mu-our-teacher-single">
                      <figure className="mu-our-teacher-img">
                        <img src={deniseImg} alt="Denise Muniz" />
                        <div className="mu-our-teacher-social">
                          <a
                            href="	
                        denize.muniz@beela.se"
                          >
                            <span className="fa fa-envelope"></span>
                          </a>
                          <a
                            href="https://www.linkedin.com/in/deniseamuniz/"
                            target="_blank" rel="noreferrer"
                          >
                            <span className="fa fa-linkedin"></span>
                          </a>
                        </div>
                      </figure>
                      <div className="mu-ourteacher-single-content">
                        <h4>Denise Muniz</h4>
                        <span>Co-Founder &amp; COO</span>
                        <p>
                          Latina immigrant and fullstack developer. Denise has
                          over 10 years of experience working as a business
                          analyst but decided to change her career path to
                          software development after she moved to Sweden. She
                          has a Bachelor's in Information Systems and a Master's
                          in Business &amp; Project Management.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-3 col-sm-6">
                    <div className="mu-our-teacher-single">
                      <figure className="mu-our-teacher-img">
                        <img src={maryamImg} alt="Maryam Arai" />
                        <div className="mu-our-teacher-social">
                          <a href="maryan.arai@gmail.com">
                            <span className="fa fa-envelope"></span>
                          </a>
                          <a
                            href="https://www.linkedin.com/in/maryam-arai-299a69a1/"
                            target="_blank" rel="noreferrer"
                          >
                            <span className="fa fa-linkedin"></span>
                          </a>
                        </div>
                      </figure>
                      <div className="mu-ourteacher-single-content">
                        <h4>Maryam Arai</h4>
                        <span>Senior Organizational Developer</span>
                        <p>
                          Social entrepreneur with a passion for diversity,
                          inclusion, and belonging. She has 8 years of
                          experience in HR-related professions,including work
                          with Arbetsförmedlingen with a focus on education,
                          recruitment, and innovation.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-3 col-sm-6">
                    <div className="mu-our-teacher-single">
                      <figure className="mu-our-teacher-img">
                        <img src={beelaLogo} alt="work with us img" />
                        <div className="mu-our-teacher-social">
                          <a href="mailto:contact@beela.se">
                            <span className="fa fa-plus"></span>
                          </a>
                        </div>
                      </figure>
                      <div className="mu-ourteacher-single-content">
                        <h4>Bee part of our team</h4>
                        <span>Work with us</span>
                        <p>
                          We are always welcoming volunteers: as mentors,
                          content creators and much more.
                          <a
                            href="mailto:contact@beela.se?subject=I want work in this amazing project!"
                            target="_blank" rel="noreferrer"
                          >
                            {" "}
                            Contact us now.
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- End our staff content --> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
