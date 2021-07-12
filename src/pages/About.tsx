import beelaLogo from "../assets/images/BeelaLogonotext.png";
import aboutUsImg from "../assets/images/about-us2.jpg";

export function About() {
  return (
    <section id="mu-about-us">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="mu-about-us-area">
                  <div className="mu-about-us-left">
                    <div className="mu-title">
                      <h2 id="about-us-id">
                        <img src={beelaLogo} width="100" height="110" alt="" />
                        Beela
                      </h2>
                    </div>

                    <p>
                      At Beela we are committed to decreasing the evident gap in
                      the unemployment rate between foreign-born women,
                      particularly those from non-European countries, and women
                      and men born in Sweden.
                    </p>
                    <p>
                      Making a career transition is hard. We help immigrant
                      women and non-binary people define their path, get
                      unblocked, and meet their learning goals. Passion brought
                      us here and we are empowering the next generation of
                      talented immigrant women and non-binary people to realize
                      their potential, creating a better future for all.
                    </p>
                  </div>
                  <div className="mu-about-us-right">
                    <img src={aboutUsImg} alt="img" />
                  </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
