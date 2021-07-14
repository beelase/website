
import plussLogo from '../assets/images/partners/pluss.svg';
import newToSwedenLogo from '../assets/images/partners/newtosweden.jpeg';
import techFleetLogo from '../assets/images/partners/techfleet.jpeg';
import beetrootLogo from '../assets/images/partners/beetroot.png';

export function Business(){
  return (
    <section id="mu-latest-courses">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="mu-latest-courses-area">
            {/* <!-- start title --> */}
            <div className="mu-title">
              <h2>Beela for Business</h2>
              <p>Are you working on building a more diverse team? </p> 
              
              <p>We can help you find the best talents
                and show you how to thrive with a diverse team. 
                 <a href="mailto:business@beela.se" target="_blank">Contact us</a>.</p>
            </div>
            {/* <!-- end title --> */}
            <div className="mu-title">
              <br />
              <h4>Meet our partners</h4>
              <a href="https://www.pluss.app/"> <img src={plussLogo} alt="Pluss International" /></a>
             <a href="https://www.newtosweden.org/"><img src={newToSwedenLogo} alt="New to Sweden" /></a>
             <a href="https://www.linkedin.com/company/tech-fleet-baltimore"><img src={techFleetLogo} alt="Tech Fleet" /></a>
             <a href="https://beetrootacademy.se/"><img src={beetrootLogo} alt="Beetroot Academy" className="img-square" /></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}