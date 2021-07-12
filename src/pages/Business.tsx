
import plussLogo from '../assets/images/partners/pluss.svg';
import newToSwedenLogo from '../assets/images/partners/newtosweden.jpeg';
import techFleetLogo from '../assets/images/partners/techfleet.jpeg';

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
                <a href="mailto:contact@beela.se">Contact us</a>.</p>
            </div>
            {/* <!-- end title --> */}
            <div className="mu-title">
              <br />
              <h4>Meet our partners</h4>
             <img src={plussLogo} alt="Pluss International" />
             <img src={newToSwedenLogo} alt="New to Sweden" />
             <img src={techFleetLogo} alt="Tech Fleet" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}