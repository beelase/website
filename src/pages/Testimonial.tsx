
import Slider from "react-slick";


import jinyanLiu from '../assets/images/testimonial/Jinyan-Feature3.png';
import alekssandraGeric from '../assets/images/testimonial/Alexandra-CedricIvy.jpg';
import nataliaVilela from '../assets/images/testimonial/Natalia-Vilela3.png';
import vanessaSue from '../assets/images/testimonial/VanessaSueSmith.jpg';
import meriVanchovska from '../assets/images/testimonial/Meri.png'
import danielaZacarias from '../assets/images/testimonial/Daniela.jpg'



export function Testimonial() {
  /*   jQuery(".mu-testimonial-slider").slick({
    dots: true,
    infinite: true,
    arrows: false,
    autoplay: true,
    speed: 500,
    cssEase: "linear",
  }); */

  const settings = {

    infinite: true,
    slidesToShow: 1,
    speed: 500,
    autoplaySpeed: 10000,
    arrows: true,
    autoplay: true,
    dots: true,
    touchThreshold: 10000,
    pauseOnHover: true,
  
    }

  return (
    <section id="mu-testimonial">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="mu-testimonial-area">
            <div className="mu-title">
              <h2>She did it!</h2>
            </div>
              <div id="mu-testimonial-slide" className="mu-testimonial-content">
              <Slider {...settings}>
                {/* <!-- start testimonial single item --> */}
                <div className="mu-testimonial-item">
                  <div className="mu-testimonial-quote">
                    <blockquote>
                      <p>
                          Jinyan is a software developer working for Bontouch in
                        Sweden. She is from China and has a Bachelor’s degree in
                        Art and Design and a Master’s in Interactive Media
                        Design. After school, she worked as a group exercise
                        instructor at Actic, a Swedish gym, teaching Les Mills
                        Body Combat and Body Pump but decided to change her
                        career path and became an Android developer.
                      </p>
                      <p>
                        She loves cinema and she won Best Actress at the 2010
                        D.C. Chinese Film Festival for her role in the short
                        film Be Touched.
                      </p>
                    </blockquote>
                  </div>
                  <div className="mu-testimonial-img jinyan">
                    <img src={jinyanLiu} alt="Jianyan Liu" />
                  </div>
                  <div className="mu-testimonial-info">
                    <h4>Jinyan Liu</h4>
                    <span>Android Developer</span>
                  </div>
                </div>
                {/* <!-- end testimonial single item -->
                <!-- start testimonial single item --> */}
                <div className="mu-testimonial-item">
                  <div className="mu-testimonial-quote">
                    <blockquote>
                      <p>
                        Ivy is a well-being, career/purpose and mindfulness
                        coach trained in NVC (nonviolent communication), NLP
                        (neuro linguistic programming), and psychology; has an
                        extensive experience and practice of meditation, yoga,
                        mindfulness and empathy work; as well as long life
                        interest in introspection, neuroscience, spirituality
                        and self-development. She studied software development
                        at KTH and worked as a software development consultant
                        in Stockholm for two years before co-founding Moonwise.
                      </p>
                    </blockquote>
                  </div>
                  <div className="mu-testimonial-img">
                    <img src={alekssandraGeric} alt="Aleksandra Geric" />
                  </div>
                  <div className="mu-testimonial-info">
                    <h4>Aleksandra Geric (Ivy)</h4>
                    <span>CEO at Moonwise</span>
                  </div>
                </div>
                {/*  <!-- end testimonial single item --> */}
                {/* <!-- start testimonial single item --> */}
                <div className="mu-testimonial-item">
                  <div className="mu-testimonial-quote">
                    <blockquote>
                      <p>

                        Natália is a UX Designer, Brazilian and resilient by
                        default. She started her career in tech from scratch
                        when she decided to move to Stockholm and she learned
                        english while living in Sweden. Despite all the fears
                        and uncertainties, she started in a new career and today
                        studies at Hyper Island and works as a consultant. In
                        her free time, she loves to visit new places by cycling
                        and trying different foods.
                      </p>
                    </blockquote>
                  </div>
                  <div className="mu-testimonial-img">
                    <img src={nataliaVilela} alt="Natalia Vilela" />
                  </div>
                  <div className="mu-testimonial-info">
                    <h4>Natália Vilela</h4>
                    <span>UX/UI Designer</span>
                  </div>
                </div>
                {/* <!-- end testimonial single item --> */}
                {/* <!-- start testimonial single item --> */}
                <div className="mu-testimonial-item">
                  <div className="mu-testimonial-quote">
                    <blockquote>
                      <p>
                        
                        Vanessa is original from Panamá and always liked
                        creating visuals and playing with design and color. She
                        has a bachelor's in Graphic Design and before moving to
                        Sweden, she lived in Belgium for 10 years where she
                        started a career as a Chef and also a food blog where
                        she developed her own recipes and promoted conscious and
                        vegan eating.
                      </p>
                      <p>
                        She worked for 11 years as a Chef and Kitchen Manager
                        before she felt a need to reconnect with her creative
                        side, and decided to go for a career change and pursue
                        Web Development. She completed the Technigo Bootcamp in
                        February 2021 and recently started a position as a
                        Consultant at Axakon as a Front end developer.
                      </p>
                    </blockquote>
                  </div>
                  <div className="mu-testimonial-img">
                    <img src={vanessaSue} alt="Vanessa Sue Smith" />
                  </div>
                  <div className="mu-testimonial-info">
                    <h4>Vanessa Sue Smith</h4>
                    <span>Front-End Developer</span>
                  </div>
                </div>
                {/* <!-- end testimonial single item --> */}
                {/* <!-- start testimonial single item --> */}
                <div className="mu-testimonial-item">
                  <div className="mu-testimonial-quote">
                    <blockquote>
                      <p>
                        Meri is originally from Skopje, N. Macedonia and is an
                        experienced communication specialist with a great love
                        for project management and relevant experience in social
                        media marketing.
                      </p>
                      <p>
                        She has been part of building and promoting quite a few
                        companies and products.
                      </p>
                      <p>
                        In her career, she has managed to launch the first
                        international clothing store that featured and promoted
                        Macedonian designers' eco-friendly clothing in the
                        world. Also, within a year of taking over as an SMM for
                        a small Canadian video platform at the time, ComScore
                        ranked them as one of the top 50 video sites.
                      </p>
                      <p>
                        After moving to Stockholm she worked as the
                        Communications Manager and Digital Diplomacy Officer s
                        the Macedonian Embassy, when she decided it’s time for a
                        change.
                      </p>
                      <p>
                        So she enrolled and studied software development at KTH
                        , and worked as a Technical Communicator at Bambuser.
                      </p>
                    </blockquote>
                  </div>
                  <div className="mu-testimonial-img">
                    <img src={meriVanchovska} alt="Meri Vanchovska" />
                  </div>
                  <div className="mu-testimonial-info">
                    <h4>Meri M. Vanchovska</h4>
                    <span>Creative Digital Specialist</span>
                  </div>
                </div>
                {/* <!-- end testimonial single item --> */}
                {/* <!-- start testimonial single item --> */}
                <div className="mu-testimonial-item">
                  <div className="mu-testimonial-quote">
                    <blockquote>
                      <p>
                        Daniela is from Mexico, lived in Canada and now in
                        Sweden for the last 10 years.
                      </p>
                      <p>
                        With a background in Media &amp; communications and
                        Project Management, she has been working in the cultural
                        sector in different positions, from radio producer and
                        digital marketer to administrator and festival manager.
                      </p>
                      <p>
                        She even dedicated a couple of years coaching
                        unaccompanied minors who migrated to Sweden seeking
                        asylum. Among their tasks was the planning of cultural
                        and physical activities to support them in their social
                        integration.
                      </p>
                      <p>
                        With a growing interest in programming and UI/UX design,
                        Daniela realized she was ready for new challenges, a new
                        lifestyle that involved a career shift from culture to
                        tech.
                      </p>
                      <p>
                        In June/2021 she'd graduated from Technigo bootcamp and
                        will be ready and excited to start applying for jobs as
                        a Web developer.
                      </p>
                    </blockquote>
                  </div>
                  <div className="mu-testimonial-img">
                    <img src={danielaZacarias} alt="Daniela Zacarias" />
                  </div>
                  <div className="mu-testimonial-info">
                    <h4>Daniela Zacarias</h4>
                    <span>Web Developer</span>
                  </div>
                </div>
                {/* <!-- end testimonial single item --> */}
              </Slider>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
