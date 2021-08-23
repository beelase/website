import { Carousel } from '../components/Carousel';
import { About } from './About';
import { Features } from './Features';
import { Board } from './Board';
import { Business } from './Business';
import { Testimonial } from './Testimonial';

import slideImg1 from '../assets/images/slider/1.jpg';
import slideImg2 from '../assets/images/slider/2.jpg';
import slideImg3 from '../assets/images/slider/3.jpg';
import empowerImg from '../assets/images/icons/startup.svg';
import informImg from '../assets/images/icons/letter.svg';
import inspireImg from '../assets/images/icons/creativity.svg';
import linkedInIcon from '../assets/images/linkedin.png';
import instagramIcon from '../assets/images/instagram.png';


const Slides = [
  {
    id: "1",
    image: slideImg1,
    title: "Welcome To Beela",
    mainText: "Guiding women and non-binary people Into Tech",
    ctaText: "We empower immigrant women and non-binary people to start working with IT in Sweden.",
    ctaButton: "",
    ctaHref: ""
  },
  {
    id: "2",
    image: slideImg2,
    title: "Integration into the Swedish Labour",
    mainText: "Career tips",
    ctaText: "Courses, bootcamps and events for beginners on your email. Sign up for free now.",
    ctaButton: "Sign up",
    ctaHref: "https://beela.us1.list-manage.com/subscribe/post?u=ec3f144b4e769635dffef5601&amp;id=92a05c0895"
  },
  {
    id: "3",
    image: slideImg3,
    title: "Mentoring",
    mainText: "Empowered people Empower people",
    ctaText: "We help people to define their path, get unblocked, and meet their learning goals.",
    ctaButton: "",
    ctaHref: ""
  }
];

export function LandingPage() {
  return (
    <div>
    <Carousel slides={Slides} />

     <section id="mu-service">
    <div className="container">
      <div className="row">
        <div className="col-lg-12 col-md-6">
          <div className="mu-service-area">

            <div className="mu-service-single">
              <span><img src={empowerImg} alt="Empower"  /></span>
              <h3>Empower</h3>
              <p>We help immigrant women &amp; non-binary people to achieve all their potential through coaching, mentoring, and networking.</p>
            </div>

            <div className="mu-service-single ">
              <span><img src={informImg} alt="Inform"  width="55" height="55" /></span>
              <h3>Inform</h3>
              <p>We spread the word about what's happening in the tech world — boot-camps, code academies, courses, and events. </p>
            </div>

            <div className="mu-service-single ">
              <span ><img src={inspireImg} alt="Inspire"  width="60" height="55" /></span>
              <h3>Inspire</h3>
              <p>We share stories of people who built a career in tech, and of employers who embraced the mission and created opportunities.</p>
            </div>

          </div>
        </div>
      </div>
    </div>
  </section>
  <About />
  <Features />
  <Board />
  <Business />
  <Testimonial />

  {/* <!-- Start social media section -->  res*/}
  <section id="mu-latest-courses">
    <div className="container">
      <div className="row">
        {/* <!-- <div className="col-lg-12 col-md-12"> --> */}
        <div className="mu-latest-courses-area">
          {/* <!-- Start Title --> */}
          <div className="mu-title">
            <h2>Social Media</h2>
            <p>Follow us on our social media channels.</p>

            <div className="social-media">
              <a href="https://www.instagram.com/beela.se/">
                <img src={instagramIcon}  alt="" />
                </a>
              <a href="https://www.linkedin.com/company/beela-se/">
                <img src={linkedInIcon}  alt="" />
                </a>
              <br />
              <br />
            </div>

            {/* <!-- SnapWidget -->
            <!-- SITE TO CHANGE INSTAGRAM GRID https://snapwidget.com/widgets/create?plan=free&service=instagram&type=grid -->
            <!-- End social media content --> */}
          </div>
        </div>
        {/* <!-- </div> --> */}
      </div>
    </div>
  </section>
  {/* <!-- End latest social media section --> */}
  
  {/* <!-- Start footer --> */}
  <footer id="mu-footer">
    {/* <!-- start footer top --> */}
    <div className="mu-footer-top">
      <div className="container">
        <div className="mu-footer-top-area">
          <div className="row">
            <div className="col-lg-3 col-md-3 col-sm-3">
              <div className="mu-footer-widget">
                <h4>Information</h4>
                <ul>
                  <li><a href="#about-us-id">Beela</a></li>
                  <li><a href="#programmes-id">Our Programmes</a></li>
                  <li><a href="https://www.instagram.com/beela.se/" target="_blank" rel="noreferrer">Stories</a></li>
                  {/* <li><a href="mentoring.html">Take action</a></li> */}
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-3">
              <div className="mu-footer-widget">
                <h4>Work with us</h4>
                <ul>
                 {/* <!--  <li><a href="mentoring.html">Mentee</a></li>
                  <li><a href="mentoring.html">Mentor</a></li> --> */}
                  <li><a href="https://www.linkedin.com/posts/beela-se_volunteer-opportunities-activity-6793079881447063552-yOXX" target="_blank" rel="noreferrer">Volunteer</a></li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-3">
              <div className="mu-footer-widget">
             
                <h4>Newsletter</h4>
                <p>Get the latest update, news &amp; tips.</p>
               <form className="mu-subscribe-form">
                 {/*   <input type="email" placeholder="Type your Email" /> --> */}
                  <button className="mu-subscribe-btn"><a  href="https://beela.us1.list-manage.com/subscribe/post?u=ec3f144b4e769635dffef5601&amp;id=92a05c0895">Subscribe</a></button>
      
                </form> 
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-3">
              <div className="mu-footer-widget">
                <h4>Contact</h4>
                <address>
                  <p>Stockholm, Sweden</p>
                  {/* <!-- <p>Phone: (415) 453-1568 </p> --> */}
                  <a href="mailto:contact@beela.se" target="_blank" rel="noreferrer"><p>Email: contact@beela.se</p></a>
                </address>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* <!-- end footer top -->
    <!-- start footer bottom --> */}
    <div className="mu-footer-bottom">
      <div className="container">
        <div className="mu-footer-bottom-area">
          <p>&copy; All Right Reserved. Beela, 2021. </p>
        </div>
      </div>
    </div>
    {/* <!-- end footer bottom --> */}
  </footer>
  {/* <!-- End footer --> */}
  
  </div>
  )
}