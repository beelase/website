import { Carousel } from '../components/Carousel';
import { About } from './About';
import { Features } from './Features';
import { Board } from './Board';
import { Business } from './Business';
import { Testimonial } from './Testimonial';
import { Mentoring } from './Mentoring';
import { Footer } from './Footer';

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
                  <span><img src={empowerImg} alt="Empower" /></span>
                  <h3>Empower</h3>
                  <p>We help immigrant women &amp; non-binary people to achieve all their potential through coaching, mentoring, and networking.</p>
                </div>

                <div className="mu-service-single ">
                  <span><img src={informImg} alt="Inform" width="55" height="55" /></span>
                  <h3>Inform</h3>
                  <p>We spread the word about what's happening in the tech world — boot-camps, code academies, courses, and events. </p>
                </div>

                <div className="mu-service-single ">
                  <span ><img src={inspireImg} alt="Inspire" width="60" height="55" /></span>
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
      <Mentoring />
      <Board />

      <Testimonial />
      <Business />

    
    </div>
  )
}